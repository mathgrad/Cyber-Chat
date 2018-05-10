//Tutorial.js handles the javascript on the tutorial page.

var start = document.getElementById('Started');
var main = document.getElementById('Main');
var selec = document.getElementById('Select');
var question = document.getElementById('Question');
var score = document.getElementById('Score');
var summary = document.getElementById('Summary');
var custquest = document.getElementById('CustomizingQuestions');

var startchild = document.getElementById('Startedchild');
var mainchild = document.getElementById('Mainchild');
var selectchild = document.getElementById('Selectchild');
var questionchild = document.getElementById('Questionchild');
var scorechild = document.getElementById('Scorechild');
var summarychild = document.getElementById('Summarychild');
var custquestchild = document.getElementById('CustomizingQuestionschild');

var add = document.getElementById('add');
var addchild = document.getElementById('addchild');
var remove = document.getElementById('remove');
var removechild = document.getElementById('removechild');

add.addEventListener('click', function () {
    var display = addchild.style.display;

    switch (display) {
        case 'none':
            addchild.style.display = 'block';
            break;
        case 'block':
            addchild.style.display = 'none';
            break;
        default:
            addchild.style.display = 'none';
            break;
    }
});

remove.addEventListener('click', function () {
    var display = removechild.style.display;

    switch (display) {
        case 'none':
            removechild.style.display = 'block';
            break;
        case 'block':
            removechild.style.display = 'none';
            break;
        default:
            removechild.style.display = 'none';
            break;
    }
});

startchild.style.display = 'none';
mainchild.style.display = 'none';
selectchild.style.display = 'none';
questionchild.style.display = 'none';
scorechild.style.display = 'none';
summarychild.style.display = 'none';
custquestchild.style.display = 'none';

start.addEventListener('click', function () {
    var display = startchild.style.display;

    switch (display) {
        case 'none':
            startchild.style.display = 'block';
            break;
        case 'block':
            startchild.style.display = 'none';
            break;
        default:
            startchild.style.display = 'none';
            break;
    }
});

main.addEventListener('click', function () {
    var display = mainchild.style.display;

    switch (display) {
        case 'none':
            mainchild.style.display = 'block';
            break;
        case 'block':
            mainchild.style.display = 'none';
            break;
        default:
            mainchild.style.display = 'none';
            break;
    }
});

selec.addEventListener('click', function () {
    var display = selectchild.style.display;

    switch (display) {
        case 'none':
            selectchild.style.display = 'block';
            break;
        case 'block':
            selectchild.style.display = 'none';
            break;
        default:
            selectchild.style.display = 'none';
            break;
    }
});

question.addEventListener('click', function () {
    var display = questionchild.style.display;

    switch (display) {
        case 'none':
            questionchild.style.display = 'block';
            break;
        case 'block':
            questionchild.style.display = 'none';
            break;
        default:
            questionchild.style.display = 'none';
            break;
    }
});

score.addEventListener('click', function () {
    var display = scorechild.style.display;

    switch (display) {
        case 'none':
            scorechild.style.display = 'block';
            break;
        case 'block':
            scorechild.style.display = 'none';
            break;
        default:
            scorechild.style.display = 'none';
            break;
    }
});

summary.addEventListener('click', function () {
    var display = summarychild.style.display;

    switch (display) {
        case 'none':
            summarychild.style.display = 'block';
            break;
        case 'block':
            summarychild.style.display = 'none';
            break;
        default:
            summarychild.style.display = 'none';
            break;
    }
});

custquest.addEventListener('click', function () {
    var display = custquestchild.style.display;

    switch (display) {
        case 'none':
            custquestchild.style.display = 'block';
            addchild.style.display = 'none';
            removechild.style.display = 'none';
            break;
        case 'block':
            custquestchild.style.display = 'none';
            break;
        default:
            custquestchild.style.display = 'none';
            break;
    }
});