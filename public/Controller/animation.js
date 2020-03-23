
const slideMenu = function () {
    const logo = document.querySelector(".logo");
    const menu = document.querySelector(".menu");
    const days = document.querySelector(".days");
    const content = document.querySelector(".content");

    logo.addEventListener('click', () => {
        logo.classList.toggle('logo-colour');
        menu.classList.toggle('logo-active');
        days.classList.toggle('days-active');
        content.classList.toggle('content-active');
    })

}

const workout = function () {

    const w1 = document.querySelector('.w1');
    const days = document.querySelector(".days");
    const d1 = document.querySelector('.d1');


    days.addEventListener('click', function (e) {
        if (e.target && e.target.matches("li.d1")) {
            w1.classList.toggle("w1-active");
            days.classList.toggle("days-hide");
            d1.classList.toggle("day-show");
        }
    })
}




workout();
slideMenu();