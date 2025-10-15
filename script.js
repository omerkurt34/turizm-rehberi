const languageScreen = document.getElementById("language-screen");
const mainScreen = document.getElementById("main-screen");
const mainTitle = document.getElementById("main-title");
const categoriesContainer = document.querySelector(".categories");

// Kategoriler ve linkler
const categories = {
  tr: [
    { icon: "fa-tshirt", name: "Giyim Yerleri", link: "giyim.html" },
    { icon: "fa-utensils", name: "Restoranlar" },
    { icon: "fa-mug-hot", name: "Kafeler" },
    { icon: "fa-building", name: "AVM'ler" },
    { icon: "fa-smoking", name: "Nargile Kafeler" },
    { icon: "fa-landmark", name: "Tarihi Yerler" },
    { icon: "fa-museum", name: "Müzeler" },
    { icon: "fa-wine-glass", name: "Eğlence Yerleri" }
  ],
  en: [
    { icon: "fa-tshirt", name: "Clothing Stores", link: "giyim.html" },
    { icon: "fa-utensils", name: "Restaurants" },
    { icon: "fa-mug-hot", name: "Cafes" },
    { icon: "fa-building", name: "Malls" },
    { icon: "fa-smoking", name: "Hookah Cafes" },
    { icon: "fa-landmark", name: "Historical Sites" },
    { icon: "fa-museum", name: "Museums" },
    { icon: "fa-wine-glass", name: "Entertainment" }
  ],
  ar: [
    { icon: "fa-tshirt", name: "أماكن الملابس", link: "giyim.html" },
    { icon: "fa-utensils", name: "مطاعم" },
    { icon: "fa-mug-hot", name: "مقاهي" },
    { icon: "fa-building", name: "مراكز التسوق" },
    { icon: "fa-smoking", name: "كافيهات النرجيلة" },
    { icon: "fa-landmark", name: "أماكن تاريخية" },
    { icon: "fa-museum", name: "متاحف" },
    { icon: "fa-wine-glass", name: "أماكن الترفيه" }
  ]
};

// Dil seçimi
function setLanguage(lang) {
  localStorage.setItem("language", lang);
  showMainScreen(lang);
}

// Ana ekranı göster
function showMainScreen(lang) {
  languageScreen.classList.remove("active");
  mainScreen.classList.add("active");
  mainTitle.textContent =
    lang === "tr"
      ? "Kategoriler"
      : lang === "en"
      ? "Categories"
      : "الفئات";

  categoriesContainer.innerHTML = "";

  categories[lang].forEach((cat) => {
    const div = document.createElement("div");
    div.classList.add("category");
    div.innerHTML = `
      <i class="fa-solid ${cat.icon}"></i>
      <p>${cat.name}</p>
    `;
    if (cat.link) {
      div.onclick = () => (window.location.href = cat.link);
    } else {
      div.onclick = () => alert(`${cat.name} sayfası yakında eklenecek.`);
    }
    categoriesContainer.appendChild(div);
  });
}

// Geri butonu (dil ekranına dön)
function backToLanguageScreen() {
  mainScreen.classList.remove("active");
  languageScreen.classList.add("active");
}

// Sayfa yüklendiğinde
window.onload = () => {
  const savedLang = localStorage.getItem("language");
  if (savedLang) {
    showMainScreen(savedLang);
  } else {
    languageScreen.classList.add("active");
  }
};
