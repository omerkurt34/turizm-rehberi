const stores = [
  { category: "Kafeler", name: "Villa Cello", images: ["villacello1.jpg","villacello2.jpg","villacello3.jpg"], folder:"kafeler", menu:["Espresso","Latte","Pasta","Salata"] },
  { category: "AVM'ler", name: "İstinye Park", images:["istanbulavm1.jpg","istanbulavm2.jpg"], folder:"avm" },
  { category: "AVM'ler", name: "Zorlu Center", images:["istanbulavm3.jpg","istanbulavm4.jpg"], folder:"avm" },
  { category: "AVM'ler", name: "Kanyon", images:["istanbulavm5.jpg","istanbulavm6.jpg"], folder:"avm" },
  { category: "AVM'ler", name: "Forum İstanbul", images:["forumistanbul1.jpg","forumistanbul2.jpg"], folder:"avm" },
  { category: "AVM'ler", name: "Marmara Forum", images:["marmaraforum1.jpg","marmaraforum2.jpg"], folder:"avm" },
  { category: "AVM'ler", name: "Aqua Florya", images:["aquaflorya1.jpg","aquaflorya2.jpg"], folder:"avm" }
];

const storeContainer = document.getElementById("store-container");
const imagePopup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img");
const popupMenu = document.getElementById("popup-menu");

let currentStore = null;
let currentImageIndex = 0;

const languageSelect = document.getElementById("language-select");
const categoryFilter = document.getElementById("category-filter");

function renderStores(filter="all"){
  storeContainer.innerHTML = "";
  stores.filter(s => filter==="all"||s.category===filter)
        .forEach((store,index)=>{
    const div = document.createElement("div");
    div.classList.add("store-card");
    div.innerHTML = `<div class="store-img-container">
      <img src="images/${store.folder}/${store.images[0]}" alt="${store.name}">
      <div class="overlay"><h3>${store.name}</h3><p>${store.category}</p></div>
    </div>`;
    div.onclick = ()=>openGallery(index);
    storeContainer.appendChild(div);
  });
}

function openGallery(index){
  currentStore = stores[index];
  currentImageIndex = 0;
  popupImg.src = `images/${currentStore.folder}/${currentStore.images[currentImageIndex]}`;
  popupMenu.innerHTML = currentStore.menu ? "<h4>Menü</h4><ul>"+currentStore.menu.map(i=>`<li>${i}</li>`).join("")+"</ul>" : "";
  imagePopup.classList.add("active");
}

function closePopup(){ imagePopup.classList.remove("active"); }
function nextImage(){ currentImageIndex = (currentImageIndex+1)%currentStore.images.length; popupImg.src=`images/${currentStore.folder}/${currentStore.images[currentImageIndex]}`; }
function prevImage(){ currentImageIndex = (currentImageIndex-1+currentStore.images.length)%currentStore.images.length; popupImg.src=`images/${currentStore.folder}/${currentStore.images[currentImageIndex]}`; }

languageSelect.onchange = ()=>{ /* dil seçimi eklenecek */ };
categoryFilter.onchange = ()=>renderStores(categoryFilter.value);

renderStores();
