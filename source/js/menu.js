const toggleMenu = document.querySelector(".navigation__toggle");
const menu = document.querySelectorAll(".menu");

toggleMenu.addEventListener('click', (e) => {
  menu.forEach((menuList) => {
    menuList.classList.toggle("hidden");
  })
  toggleMenu.classList.toggle("navigation__toggle--open");
})
