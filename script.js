const freeDelivery = document.querySelector(".header__delivery");
const buttonCloseFreeDelivery = document.querySelector(
  ".header__delivery-button"
);

// Закрытие информации о бесплатной доставке
buttonCloseFreeDelivery.addEventListener("click", () => {
  freeDelivery.style.display = "none";
});
