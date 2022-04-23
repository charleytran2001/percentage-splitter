let barContainer = document.getElementById('bar-container');
let bar1 = document.getElementsByClassName('bar')[0];
let bar2 = document.getElementsByClassName('bar')[1];
let resize1 = document.getElementsByClassName('resize')[0];

let mousePosition = 0;

resize1.addEventListener('mousedown', function(e) {
    e.preventDefault();
    document.onmousemove = function(e) {
        mousePosition = (((e.pageX - barContainer.offsetLeft) / (barContainer.offsetWidth)) * 100);
        console.log(e.pageX + " - " + mousePosition);
        
        switch(true) {
            case (mousePosition <= 1):
                bar1.style.width = "1%";
                bar2.style.width = "99%";
                bar1.getElementsByTagName('p')[0].innerHTML = "1.00%";
                bar2.getElementsByTagName('p')[0].innerHTML = "99.00%";
                break;
            case (mousePosition >= 99):
                bar1.style.width = "99%";
                bar2.style.width = "1%";
                bar1.getElementsByTagName('p')[0].innerHTML = "99.00%";
                bar2.getElementsByTagName('p')[0].innerHTML = "1.00%";
                break;
            default:
                bar1.style.width = mousePosition + "%";
                bar1.getElementsByTagName('p')[0].innerHTML = mousePosition.toFixed(2) + "%";

                bar2.style.width = 100 - mousePosition + "%";
                bar2.getElementsByTagName('p')[0].innerHTML = (100 - mousePosition).toFixed(2) + "%";
        }
        
    }
});

window.addEventListener('mouseup', function(e) {
    document.onmousemove = null;
});