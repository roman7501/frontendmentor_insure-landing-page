const burgerIcon = document.querySelector("#burger-icon");
const burgerMenu = document.querySelector(".burger-menu");

let isClicked = false;

burgerIcon.addEventListener("click", () => {
  if (!isClicked) {
    burgerMenu.classList.add("burger-menu-show");
    isClicked = true;
  } else {
    burgerMenu.classList.remove("burger-menu-show");
    isClicked = false;
  }
});
