let barContainer = document.getElementById('bar-container');
let bar1 = document.getElementsByClassName('bar')[0];
let bar2 = document.getElementsByClassName('bar')[1];
let resize1 = document.getElementsByClassName('resize')[0];

// onmousemove = function (e) { console.log("mouse location:", e.clientX, e.clientY) }

let mousePosition = 0;

resize1.addEventListener("mousedown", function (e) {
    e.preventDefault();
    barContainer.onmousemove = function (e) {
        mousePosition = (e.pageX / barContainer.getBoundingClientRect().width) * 100;
        console.log("mouse location:", mousePosition);

        bar1.style.width = mousePosition + "%";
        bar2.style.width = 100 - mousePosition + "%";

        bar1.getElementsByTagName('p')[0].innerHTML = mousePosition.toFixed(2) + "%";
        bar2.getElementsByTagName('p')[0].innerHTML = (100 - mousePosition).toFixed(2) + "%";
    }
});

resize1.addEventListener("mouseup", function (e) {
    resize1.onmousemove = null
});