const toggle = document.getElementById('menu_toggle');
const sideBar = document.getElementById('nav_list');


toggle.addEventListener('click', () => {
  sideBar.classList.toggle('show');
})