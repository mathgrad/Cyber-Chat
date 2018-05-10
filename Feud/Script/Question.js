//Javascript file/class for Family Feud game
//Handles the question functionality
//Establishing variables
var answers = [document.getElementById('0'), document.getElementById('1'), document.getElementById('2'), document.getElementById('3'),
			   document.getElementById('4'), document.getElementById('5'), document.getElementById('6'), document.getElementById('7')];
var covers = [document.getElementById('pic0'), document.getElementById('pic1'), document.getElementById('pic2'), document.getElementById('pic3'),
			   document.getElementById('pic4'), document.getElementById('pic5'), document.getElementById('pic6'), document.getElementById('pic7')];
var xs = ['x', 'xx', 'xxx'];

var sSuccess = document.getElementById('RightSound');
var sFail = document.getElementById('WrongSound');
var sFailOut = document.getElementById('FailOut');

//Functions
function Validate() {
    var answer = document.getElementById('answer').value;
    answer = answer.replace('^[A-Z0-9 _]*$', '');
    var correct = false;

    for (i = 0; i < answers.length; i++) {
        correct = Compare(answer, answers[i].innerHTML);

        if (correct) {
            sSuccess.play();
            answers[i].style.display = 'block';
            covers[i].style.display = 'none';
            break;
        }
    }

    if (!correct) {
        for (j = 0; j < xs.length; j++) {
            var misses = document.getElementById(xs[j]);

            if (misses.style.display === 'none') {

                if (j < 2) {
                    sFail.play();
                }
                else {
                    sFailOut.play();
                }
                misses.style.display = 'inline-block';
                break;
            }
        }

        if (xs.length <= j) {
            sFail.play();
        }
    }

    document.getElementById('answer').value = '';
};

function Reset() {
    for (i = 0; i < answers.length; i++) {

        if (answers[i].style.display === 'block') {
            answers[i].style.display = 'none';
        }

        if (covers[i].style.display === 'none') {
            covers[i].style.display = 'block';
        }
    }

    for (j = 0; j < xs.length; j++) {
        var misses = document.getElementById(xs[j]);

        if (misses.style.display === 'inline-block') {
            misses.style.display = 'none';
        }
    }

    document.getElementById('answer').value = '';
};

function Reveal() {
    for (i = 0; i < answers.length; i++) {
        answers[i].style.display = 'block';
        covers[i].style.display = 'none';
    }
};

//Compares an answer with the values submitted
function Compare(answer, value) {
    answer = answer.toUpperCase().replace(/\s/g, '');
    value = value.toUpperCase().replace(/\s/g, '');

    return answer == value;
}

//Attaching functions to elements
if (document.title == 'Question') {
    var answer = document.getElementById('answer');

    if (answer !== null) {
        answer.addEventListener("keydown", function (e) {

            if (e.keyCode === 13) {
                Validate();
            }
        });
    }

    var check = document.getElementById('Check');
    check.addEventListener("click", function () {
        Validate();
    });

    var reset = document.getElementById('Reset');
    reset.addEventListener("click", function () {
        Reset();
    });

    var show = document.getElementById('Show');
    show.addEventListener("click", function () {
        Reveal();
    });

    window.addEventListener("click", function () {
        var pic = document.getElementById('Picture');
        var game = document.getElementById('Game');
        var spacer = document.getElementById('middle');

        if (pic.style.display === 'block') {
            pic.style.display = 'none';
        }

        if (game.style.display === 'none') {
            spacer.style.height = '.5vh';
            game.style.display = 'block';
        }
    });

    covers[0].addEventListener("click", function(){
	sSuccess.play();
        answers[0].style.display = 'block';
	covers[0].style.display = 'none';
    });

    covers[1].addEventListener("click", function(){
	sSuccess.play();
        answers[1].style.display = 'block';
        covers[1].style.display = 'none';
    });

    covers[2].addEventListener("click", function(){
	sSuccess.play();
        answers[2].style.display = 'block';
        covers[2].style.display = 'none';
    });

    covers[3].addEventListener("click", function(){
	sSuccess.play();
        answers[3].style.display = 'block';
        covers[3].style.display = 'none';
    });

    covers[4].addEventListener("click", function(){
	sSuccess.play();
        answers[4].style.display = 'block';
        covers[4].style.display = 'none';
    });

    covers[5].addEventListener("click", function(){
	sSuccess.play();
        answers[5].style.display = 'block';
        covers[5].style.display = 'none';
    });

    covers[6].addEventListener("click", function(){
	sSuccess.play();
        answers[6].style.display = 'block';
        covers[6].style.display = 'none';
    });

    covers[7].addEventListener("click", function(){
	sSuccess.play();
        answers[7].style.display = 'block';
        covers[7].style.display = 'none';
    });

    answers[0].addEventListener("click", function(){
        covers[0].style.display = 'block';
	answers[0].style.display = 'none';
    });

    answers[1].addEventListener("click", function(){
        covers[1].style.display = 'block';
        answers[1].style.display = 'none';
    });

    answers[2].addEventListener("click", function(){
        covers[2].style.display = 'block';
        answers[2].style.display = 'none';
    });

    answers[3].addEventListener("click", function(){
        covers[3].style.display = 'block';
        answers[3].style.display = 'none';
    });

    answers[4].addEventListener("click", function(){
        covers[4].style.display = 'block';
        answers[4].style.display = 'none';
    });

    answers[5].addEventListener("click", function(){
        covers[5].style.display = 'block';
        answers[5].style.display = 'none';
    });

    answers[6].addEventListener("click", function(){
        covers[6].style.display = 'block';
        answers[6].style.display = 'none';
    });

    answers[7].addEventListener("click", function(){
        covers[7].style.display = 'block';
        answers[7].style.display = 'none';
    });
}