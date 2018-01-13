
document.addEventListener('DOMContentLoaded', function () {

    var interval = null;
    var timer = 0;

    function timerValue() {
        document.getElementById("timer").innerHTML = timer++;
    }

    document.getElementById('start').addEventListener('click', function () {
        clearInterval(interval);
        timer = 0;
        interval = setInterval(timerValue, 1000)
    }, false);

    document.getElementById('stop').addEventListener('click', function () {
        clearInterval(interval);
    }, false);

});