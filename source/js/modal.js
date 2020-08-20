const buyButtons = document.querySelectorAll('.product__button');
const modalCart = document.querySelector('.modal');

buyButtons.forEach((butBtn) => {
  butBtn.addEventListener('click', (e) => {
    if (modalCart.classList.contains("hidden")) {
      modalCart.classList.remove("hidden");
    }
  });
})

modalCart.addEventListener('click', (e) => {
  let modalInner = e.target.closest('.modal__inner');
  if (modalInner) return;
  modalCart.classList.add("hidden");
})
