
const slideMenu = function () {
    const logo = document.querySelector(".logo");
    const arrowTop = document.querySelector(".arrowtop");
    const arrowBottom = document.querySelector(".arrowbottom");
    const menu = document.querySelector(".menu");

    logo.addEventListener('click', () => {
        document.body.classList.toggle('stop-scrolling');
        logo.classList.toggle('logo-colour');
        arrowTop.classList.toggle('arrowtop-active');
        arrowBottom.classList.toggle('arrowbottom-active');
        menu.classList.toggle('logo-active');
    })

}

slideMenu();