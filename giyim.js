const stores = [
  {
    name: "Bilgins Mağazası",
    images: ["bilgins1.jpg", "bilgins2.jpg", "bilgins3.jpg"],
  },
];

const storeContainer = document.getElementById("store-container");
const imagePopup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");

let currentStore = null;
let currentImageIndex = 0;

stores.forEach((store, index) => {
  const div = document.createElement("div");
  div.classList.add("store-card");
  div.innerHTML = `
    <img src="images/giyim/${store.images[0]}" alt="${store.name}">
    <h3>${store.name}</h3>
  `;
  div.onclick = () => openGallery(index);
  storeContainer.appendChild(div);
});

function openGallery(index) {
  currentStore = stores[index];
  currentImageIndex = 0;
  popupImg.src = `images/giyim/${currentStore.images[currentImageIndex]}`;
  imagePopup.classList.add("active");
}

function closePopup() {
  imagePopup.classList.remove("active");
}

function nextImage() {
  currentImageIndex =
    (currentImageIndex + 1) % currentStore.images.length;
  popupImg.src = `images/giyim/${currentStore.images[currentImageIndex]}`;
}

function prevImage() {
  currentImageIndex =
    (currentImageIndex - 1 + currentStore.images.length) %
    currentStore.images.length;
  popupImg.src = `images/giyim/${currentStore.images[currentImageIndex]}`;
}
