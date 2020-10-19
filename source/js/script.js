'use strict'

const buyButtons = document.querySelectorAll('.product__button');
const modalCart = document.querySelector('.modal');
const buyBtnPromo = document.querySelector('.popular-item__button');

const toggleMenu = document.querySelector('.navigation__toggle');
const menu = document.querySelectorAll('.menu');
const sizeBtns = document.querySelectorAll('.modal__input');

// Открытие/закрытие главного меню
menu.forEach((menuList) => {
  menuList.classList.add('hidden');
  toggleMenu.classList.remove('hidden');
})



toggleMenu.addEventListener('click', (e) => {
  menu.forEach((menuList) => {
    menuList.classList.toggle('hidden');
  })
  toggleMenu.classList.toggle('navigation__toggle--open');
})

// Вызов модалки 'добавить в корзину' в каталоге

buyButtons.forEach((buyBtn) => {
  buyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (modalCart.classList.contains('hidden')) {
      modalCart.classList.remove('hidden');
    }
    sizeBtns[1].focus();
  });
})

// Вызов модалки 'добавить в корзину' на главной

if (buyBtnPromo) {
  buyBtnPromo.addEventListener('click', (e) => {
    e.preventDefault();
    if (modalCart.classList.contains('hidden')) {
      modalCart.classList.remove('hidden');
    }
    sizeBtns[1].focus();
  });
}

// Закрытие модалки 'добавить в корзину'
if (modalCart) {
  modalCart.addEventListener('click', (e) => {
    const modalInner = e.target.closest('.modal__inner');
    if (modalInner) return;
    modalCart.classList.add('hidden');
  })
}


// Закрытие модалки по esc

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    modalCart.classList.add('hidden');
  }
});
