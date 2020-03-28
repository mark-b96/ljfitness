const workout = function () {

    const w1 = document.querySelector('.w1');
    const days = document.querySelector(".days");
    const d1 = document.querySelector('.d1');
    const dArr = document.querySelectorAll("li");


    days.addEventListener('click', function (e) {

        checked = !checked;
        w1.classList.toggle('w1-active');
        var clicked = '.' + e.target.classList[0];

        const t = document.querySelector(clicked);

        dArr.forEach(li => {
            console.log(li.className);
            if (li.className != t.className && checked)
                li.remove();
            if (li.className != t.className && !checked)
                days.append(li);
        })
    })
}

var checked = false;

workout();