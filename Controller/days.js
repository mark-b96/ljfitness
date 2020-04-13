const workout = function () {

    const w1 = document.querySelector('.w1');
    const days = document.querySelector(".days");
    const dArr = document.querySelectorAll("li");


    days.addEventListener('click', function (e) {

        checked = !checked;
        w1.classList.toggle('w1-active');
        var clicked = '.' + e.target.classList[0];

        const t = document.querySelector(clicked);

        let day_selected = parseInt(t.className[1]);
        // module.exports = day_selected;

        dArr.forEach(li => {
            if (li.className != t.className && checked)
                li.remove();
            if (!checked)
                days.append(li);
        })
    })
}

var checked = false;
workout();
