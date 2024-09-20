const productButtons = document.querySelectorAll(".product__button");
const freeDelivery = document.querySelector(".header__delivery");
const buttonCloseFreeDelivery = document.querySelector(
  ".header__delivery-button"
);

// Делаем кнопки не кликабельными
productButtons.forEach((productButton) => {
  productButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
});

// Закрытие информации о бесплатной доставке
buttonCloseFreeDelivery.addEventListener("click", () => {
  freeDelivery.style.display = "none";
});
