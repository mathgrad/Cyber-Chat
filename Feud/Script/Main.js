// Javascript Page associated with the Main.html

var largo = document.getElementById('largo');
var springLargo = document.getElementById('springLargo');
var dueTime = document.getElementById('dueTime');
var whoRU = document.getElementById('whoRU');

var timer = document.getElementById('timer');
var play = document.getElementById('play');
var min = document.getElementById('min');
var sec = document.getElementById('sec');
var setTimer = document.getElementById('setTimer');
var stop = document.getElementById('stop');

dueTime.currentTime = 8;
whoRU.currentTime = 69;
var x;
var isRunning = false;

function timer() {

}

play.addEventListener('click', function () {
	
	if(!isRunning)
	{
		isRunning = true;
		x = setInterval(function () {
			var time = timer.value;

			if ((time - 1) < 0) {
				dueTime.currentTime = 8;
				dueTime.play();
				isRunning = false;
				clearInterval(x);
				return;
			}

			timer.value = (time - 1);
		}, 1000);
	}
});

setTimer.addEventListener('click', function () {
    timer.value = parseInt(min.value * 60) + parseInt(sec.value);
});

stop.addEventListener('click', function () {
	isRunning = false;
    clearInterval(x);
});