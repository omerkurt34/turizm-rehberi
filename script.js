const languageScreen = document.getElementById("language-screen");
const mainScreen = document.getElementById("main-screen");
const mainTitle = document.getElementById("main-title");
const categoriesContainer = document.querySelector(".categories");

const categories = {
  tr: [
    { icon: "fa-shirt", name: "Giyim Yerleri" },
    { icon: "fa-utensils", name: "Restoranlar" },
    { icon: "fa-mug-hot", name: "Kafeler" },
    { icon: "fa-building", name: "AVM'ler" },
    { icon: "fa-smoking", name: "Nargile Kafeler" },
    { icon: "fa-landmark", name: "Tarihi Yerler" },
    { icon: "fa-museum", name: "Müzeler" },
    { icon: "fa-champagne-glasses", name: "Eğlence Yerleri" },
  ],
  en: [
    { icon: "fa-shirt", name: "Clothing Stores" },
    { icon: "fa-utensils", name: "Restaurants" },
    { icon: "fa-mug-hot", name: "Cafes" },
    { icon: "fa-building", name: "Malls" },
    { icon: "fa-smoking", name: "Hookah Cafes" },
    { icon: "fa-landmark", name: "Historical Sites" },
    { icon: "fa-museum", name: "Museums" },
    { icon: "fa-champagne-glasses", name: "Entertainment" },
  ],
  ar: [
    { icon: "fa-shirt", name: "أماكن الملابس" },
    { icon: "fa-utensils", name: "مطاعم" },
    { icon: "fa-mug-hot", name: "مقاهي" },
    { icon: "fa-building", name: "مراكز التسوق" },
    { icon: "fa-smoking", name: "كافيهات النرجيلة" },
    { icon: "fa-landmark", name: "أماكن تاريخية" },
    { icon: "fa-museum", name: "متاحف" },
    { icon: "fa-champagne-glasses", name: "أماكن الترفيه" },
  ],
};

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  showMainScreen(lang);
}

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
    div.onclick = () => alert(`${cat.name} sayfası yakında eklenecek.`);
    categoriesContainer.appendChild(div);
  });
}

window.onload = () => {
  const savedLang = localStorage.getItem("language");
  if (savedLang) {
    showMainScreen(savedLang);
  } else {
    languageScreen.classList.add("active");
  }
};
