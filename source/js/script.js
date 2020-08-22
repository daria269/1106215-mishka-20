const buyButtons = document.querySelectorAll('.product__button');
const modalCart = document.querySelector('.modal');
const buyBtnPromo =  document.querySelector('.popular-item__button');

const toggleMenu = document.querySelector('.navigation__toggle');
const menu = document.querySelectorAll('.menu');


// Открытие/закрытие главного меню

toggleMenu.addEventListener('click', (e) => {
  menu.forEach((menuList) => {
    menuList.classList.toggle('hidden');
  })
  toggleMenu.classList.toggle('navigation__toggle--open');
})

// Вызов модалки "добавить в корзину" в каталоге

buyButtons.forEach((buyBtn) => {
  buyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (modalCart.classList.contains('hidden')) {
      modalCart.classList.remove('hidden');
    }
  });
})

// Вызов модалки "добавить в корзину" на главной

if (buyBtnPromo) {
  buyBtnPromo.addEventListener('click', (e) => {
    e.preventDefault();
    if (modalCart.classList.contains('hidden')) {
      modalCart.classList.remove('hidden');
    }
  });
}

// Закрытие модалки "добавить в корзину"

modalCart.addEventListener('click', (e) => {
  let modalInner = e.target.closest('.modal__inner');
  if (modalInner) return;
  modalCart.classList.add('hidden');
})
