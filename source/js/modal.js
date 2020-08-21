const buyButtons = document.querySelectorAll('.product__button');
const modalCart = document.querySelector('.modal');
const buyBtnIndex =  document.querySelector('.popular-item__button');

buyButtons.forEach((buyBtn) => {
  buyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (modalCart.classList.contains("hidden")) {
      modalCart.classList.remove("hidden");
    }
  });
})

if (buyBtnIndex) {
buyBtnIndex.addEventListener('click', (e) => {
  e.preventDefault();
  if (modalCart.classList.contains("hidden")) {
    modalCart.classList.remove("hidden");
  }
  });
}

modalCart.addEventListener('click', (e) => {
  let modalInner = e.target.closest('.modal__inner');
  if (modalInner) return;
  modalCart.classList.add("hidden");
})
