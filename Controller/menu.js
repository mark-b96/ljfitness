
const slideMenu = function () {
    const logo = document.querySelector(".logo");
    const menu = document.querySelector(".menu");

    logo.addEventListener('click', () => {
        logo.classList.toggle('logo-colour');
        menu.classList.toggle('logo-active');
    })

}

slideMenu();