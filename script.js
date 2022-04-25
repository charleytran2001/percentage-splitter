let barContainer = document.getElementById('bar-container');
let bar1 = document.getElementsByClassName('bar')[0];
let bar2 = document.getElementsByClassName('bar')[1];
let resize1 = document.getElementsByClassName('resize')[0];

let valueSplit1 = document.getElementsByClassName('value-split')[0];
let valueSplit2 = document.getElementsByClassName('value-split')[1];

let value = document.getElementById('value').value;

document.getElementById('value').addEventListener('change', function() {
    value = document.getElementById('value').value;
    valueSplit1.innerHTML = ((value * mousePosition) / 100).toFixed(2);
    valueSplit2.innerHTML = ((value * (100 - mousePosition)) / 100).toFixed(2);
});

let mousePosition = 50;

resize1.addEventListener('mousedown', function(e) {
    e.preventDefault();
    document.onmousemove = function(e) {
        mousePosition = ((e.pageX - barContainer.offsetLeft - (resize1.offsetWidth / 2)) / (barContainer.offsetWidth - resize1.offsetWidth)) * 100;
        // console.log(e.pageX + " - " + mousePosition);
        
        switch(true) {
            case (mousePosition <= 1):
                bar1.style.width = "1%";
                bar2.style.width = "99%";
                valueSplit1.innerHTML = value * 0.01 + ".00";
                valueSplit2.innerHTML = value * 0.99 + ".00";
                bar1.getElementsByTagName('p')[0].innerHTML = "1.00%";
                bar2.getElementsByTagName('p')[0].innerHTML = "99.00%";
                break;
            case (mousePosition >= 99):
                bar1.style.width = "99%";
                bar2.style.width = "1%";
                valueSplit1.innerHTML = value * 0.99 + ".00";
                valueSplit2.innerHTML = value * 0.01 + ".00";
                bar1.getElementsByTagName('p')[0].innerHTML = "99.00%";
                bar2.getElementsByTagName('p')[0].innerHTML = "1.00%";
                break;
            default:
                bar1.style.width = mousePosition + "%";
                valueSplit1.innerHTML = ((value * mousePosition) / 100).toFixed(2);
                bar1.getElementsByTagName('p')[0].innerHTML = (Math.round(mousePosition / 0.05) * 0.05).toFixed(2) + "%";

                bar2.style.width = 100 - mousePosition + "%";
                valueSplit2.innerHTML = ((value * (100 - mousePosition)) / 100).toFixed(2);
                bar2.getElementsByTagName('p')[0].innerHTML = (Math.round((100 - mousePosition) / 0.05) * 0.05).toFixed(2) + "%";
        }
        
    }
});

window.addEventListener('mouseup', function(e) {
    document.onmousemove = null;
});