
const slide = function () {
    const logo = document.querySelector(".logo");
    const menu = document.querySelector(".menu");
    const days = document.querySelector(".days");

    logo.addEventListener('click', () => {
        logo.classList.toggle('logo-colour');
        menu.classList.toggle('logo-active');
        days.classList.toggle('days-active');
    })

}

slide();