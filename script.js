const stores = [
  {
    category: "Giyim Yerleri",
    name: "Bilgins Mağazası",
    images: ["bilgins1.jpg","bilgins2.jpg","bilgins3.jpg"],
    folder: "giyim"
  },
  {
    category: "Restoranlar",
    name: "Lezzet Restoran",
    images: ["rest1.jpg","rest2.jpg"],
    folder: "restoran"
  },
  {
    category: "Kafeler",
    name: "Coffee Time",
    images: ["kafe1.jpg","kafe2.jpg"],
    folder: "kafeler"
  },
  // diğer kategoriler eklenebilir...
];

const storeContainer = document.getElementById("store-container");
const imagePopup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");

let currentStore = null;
let currentImageIndex = 0;

// Kartları oluştur
stores.forEach((store, index) => {
  const div = document.createElement("div");
  div.classList.add("store-card");
  div.innerHTML = `
    <div class="store-img-container">
      <img src="images/${store.folder}/${store.images[0]}" alt="${store.name}">
      <div class="overlay"><h3>${store.name}</h3><p>${store.category}</p></div>
    </div>
  `;
  div.onclick = () => openGallery(index);
  storeContainer.appendChild(div);
});

// Popup açma
function openGallery(index) {
  currentStore = stores[index];
  currentImageIndex = 0;
  popupImg.src = `images/${currentStore.folder}/${currentStore.images[currentImageIndex]}`;
  imagePopup.classList.add("active");
}

// Popup kapatma
function closePopup() {
  imagePopup.classList.remove("active");
}

// Sonraki görsel
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % currentStore.images.length;
  popupImg.src = `images/${currentStore.folder}/${currentStore.images[currentImageIndex]}`;
}

// Önceki görsel
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + currentStore.images.length) % currentStore.images.length;
  popupImg.src = `images/${currentStore.folder}/${currentStore.images[currentImageIndex]}`;
}
