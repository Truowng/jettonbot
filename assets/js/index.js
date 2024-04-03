const menuBtn = document.querySelector("#header .menu-button");
const closeBtn = document.querySelector(
  "#header .header-link-list .close-button"
);
const menu = document.querySelector("#header .header-link-list");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
