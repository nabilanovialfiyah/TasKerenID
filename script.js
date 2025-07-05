// Daftar produk tas
const products = [
  {
    id: 1,
    name: "Tas Slempang Biru",
    price: 85000,
    image: "images/tas1.jpg",
    rating: 4.5,
    review: "Nyaman dipakai dan kualitas oke!"
  },
  {
    id: 2,
    name: "Tas Ransel Cewek",
    price: 100000,
    image: "images/tas2.jpg",
    rating: 4.0,
    review: "Warnanya cantik dan jahitan rapi."
  },
  {
    id: 3,
    name: "Tas Kulit Wanita",
    price: 250000,
    image: "images/tas3.jpg",
    rating: 5.0,
    review: "Sangat elegan dan premium!"
  },
  {
    id: 4,
    name: "Tas Pinkiess Edition",
    price: 50000,
    image: "images/tas4.jpg",
    rating: 4.5,
    review: "Aku suka pinkiess inii dan cocok untuk kuliahan!!"
  },
  {
    id: 5,
    name:"Tas Bahu Merah Maroon",
    price: 65000,
    image: "images/tas5.jpg",
    rating: 5.0,
    review: "Warna baguss bangettt"
  },
  {
    id: 6,
    name: "Tas Rajut Yellow Flower",
    price: 45000,
    image: "images/tas6.jpg",
    rating: 4.9,
    review: "Cocok di pakai ke pantai"
  },
  
  {
  id: 7,
  name: "Ransel Korean Pita",
  price: 70000,
  image: "images/tas7.jpg", 
  rating: 4.7,
  review: "Untuk sekolah bisa,kuliah bisa,muat semuanyaa"
  },
  {
    id: 8,
    name: "Totebag 2 warna-Hitam-Putih",
    price: 55000,
    image: "images/tas8.jpg",
    rating: 4.8,
    review: "Bahan nya bagus"
  },
  {
    id: 9,
    name: "Slingbag Lucu",
    price: 47000,
    image: "images/tas9.jpg",
    rating: 4.7,
    review: "Gemasss warna-warna nyaaa"
  },
  {
    id: 10,
    name: "Dompet Pinkiess",
    price: 44000,
    image: "images/tas10.jpg",
    rating: 5.0,
    review: "dompet nya cantik"
  },
  {
    id: 11,
    name: "Bag Charm Macrame",
    price: 15000,
    image: "images/tas11.jpg",
  },
  {
    id: 12,
    name: "Paperbag Kado",
    price: 3000,
    image: "images/tas12.jpg",
    rating: 4.8,
    review: "untuk kado sangat lah pilihan"
  }
];

const productContainer = document.getElementById("productContainer");
const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");
const cartCount = document.getElementById("cartCount");
const searchBox = document.getElementById("searchBox");

let cart = [];

function displayProducts(filtered = products) {
  productContainer.innerHTML = "";

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-image" onclick="openImageModal('${p.image}')">
      <h3>${p.name}</h3>
      <p>Rp ${p.price.toLocaleString()}</p>
      <div class="rating">${getStars(p.rating)} <span class="rating-text">(${p.rating})</span></div>
      <p class="review">"${p.review}"</p>
      <button onclick="addToCart(${p.id})">Beli</button>
    `;
    productContainer.appendChild(card);
  });
}

function getStars(rating) {
  const fullStar = "★";
  const emptyStar = "☆";
  const rounded = Math.floor(rating);
  let stars = fullStar.repeat(rounded);
  if (rating - rounded >= 0.5) stars += "½";
  stars += emptyStar.repeat(5 - stars.length);
  return stars;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - Rp ${item.price.toLocaleString()}
      <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
    `;
    cartItems.appendChild(li);
    total += item.price;
  });

  totalPrice.textContent = total.toLocaleString();
  cartCount.textContent = cart.length;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

searchBox.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  displayProducts(filtered);
});

displayProducts();

// Modal Gambar
const modal = document.createElement("div");
modal.id = "imageModal";
modal.className = "modal";
modal.innerHTML = `
  <span class="close" onclick="closeImageModal()">&times;</span>
  <img class="modal-content" id="modalImage">
`;
document.body.appendChild(modal);

function openImageModal(src) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = src;
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}
function slideNext() {
  const slider = document.getElementById('arrivalSlider');
  slider.scrollLeft += 200;
}

function slidePrev() {
  const slider = document.getElementById('arrivalSlider');
  slider.scrollLeft -= 200;
}
