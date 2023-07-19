import outsideClick from './outsideclick.js';

export default function initDropDownMenu() {
  const dropDownmenu = document.querySelectorAll('[data-dropdown]');

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');

    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  }

  dropDownmenu.forEach((submenu) => {
    // submenu.addEventListener('touchstart', handleClick);
    // submenu.addEventListener('click', handleClick);
    // é igual a:
    ['touchstart', 'click'].forEach((userEvent) => {
      submenu.addEventListener(userEvent, handleClick);
    });
  });
}
