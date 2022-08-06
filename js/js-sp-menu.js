const spMenuButton = document.querySelector('.js-sp-menu-button');
const spMenuWindow = document.querySelector(".js-sp-menu-window");
let isOpened = false;

spMenuButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (isOpened) {
    spMenuWindow.classList.remove('is-opened');
  } else {
    spMenuWindow.classList.add("is-opened");
  }
  isOpened = !isOpened;
})
