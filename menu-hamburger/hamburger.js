const mainMenu = document.querySelector('.lista');
const closeMenu = document.querySelector('.menu-close');
const openMenu = document.querySelector('.menu-open');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show() {
    mainMenu.classList.remove("none");
    mainMenu.classList.add("block");

    mainMenu.style.top = '0';

    openMenu.classList.remove("block")
    openMenu.classList.add("none");

    closeMenu.classList.remove("none")
    closeMenu.classList.add("block");
}
function close() {
    mainMenu.classList.remove("block");
    mainMenu.classList.add("none");

    closeMenu.classList.remove("block");
    closeMenu.classList.add("none");

    openMenu.classList.remove("none");
    openMenu.classList.add("block");
}
