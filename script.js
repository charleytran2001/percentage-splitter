let barContainer = document.getElementById('bar-container');
let bar1 = document.getElementsByClassName('bar')[0];
let bar2 = document.getElementsByClassName('bar')[1];
let resize1 = document.getElementsByClassName('resize')[0];

let mousePosition = 0;

resize1.addEventListener('mousedown', function(e) {
    e.preventDefault();
    document.onmousemove = function(e) {
        mousePosition = ((e.clientX - barContainer.getBoundingClientRect().left) / barContainer.getBoundingClientRect().width) * 100;
        // console.log("mouse location:", mousePosition);
        
        switch(true) {
            case (mousePosition <= 1):
                console.log("a");
                bar1.style.width = "1%";
                bar2.style.width = "99%";
                break;
            case (mousePosition > 1 && mousePosition < 99):
                console.log("b");
                bar1.style.width = mousePosition + "%";
                bar1.getElementsByTagName('p')[0].innerHTML = mousePosition.toFixed(2) + "%";

                bar2.style.width = 100 - mousePosition + "%";
                bar2.getElementsByTagName('p')[0].innerHTML = (100 - mousePosition).toFixed(2) + "%";
                break;
            case ((100 - mousePosition) >= 99):
                console.log("c");
                console.log("test");
                bar1.style.width = "99%";
                bar2.style.width = "1%";
                break;
        }

        
    }
});

window.addEventListener('mouseup', function(e) {
    document.onmousemove = null;
});