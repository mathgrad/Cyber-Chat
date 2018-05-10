//Javascript page for Family Feud
//Handles team scoring
//Establishing variables
var score1 = document.getElementById('Score1');
var score2 = document.getElementById('Score2');
var score3 = document.getElementById('Score3');
var score4 = document.getElementById('Score4');

var pos1 = document.getElementById('Team1Add');
var pos2 = document.getElementById('Team2Add');
var pos3 = document.getElementById('Team3Add');
var pos4 = document.getElementById('Team4Add');

var neg1 = document.getElementById('Team1Subtract');
var neg2 = document.getElementById('Team2Subtract');
var neg3 = document.getElementById('Team3Subtract');
var neg4 = document.getElementById('Team4Subtract');

//Functions
window.onload = function () {
    score1.value = 0;
    score2.value = 0;
    score3.value = 0;
    score4.value = 0;
}

pos1.addEventListener("click", function () {
    var value = score1.value;
    score1.value = (parseInt(CleanInput(value)) + 1);
});

pos2.addEventListener("click", function () {
    var value = score2.value;
    score2.value = (parseInt(CleanInput(value)) + 1);
});

pos3.addEventListener("click", function () {
    var value = score3.value;
    score3.value = (parseInt(CleanInput(value)) + 1);
});

pos4.addEventListener("click", function () {
    var value = score4.value;
    score4.value = (parseInt(CleanInput(value)) + 1);
});

neg1.addEventListener("click", function () {
    var value = score1.value;
    score1.value = (parseInt(CleanInput(value)) - 1);
});

neg2.addEventListener("click", function () {
    var value = score2.value;
    score2.value = (parseInt(CleanInput(value)) - 1);
});

neg3.addEventListener("click", function () {
    var value = score3.value;
    score3.value = (parseInt(CleanInput(value)) - 1);
});

neg4.addEventListener("click", function () {
    var value = score4.value;
    score4.value = (parseInt(CleanInput(value)) - 1);
});

function CleanInput(value) {
    var addNeg = (value.indexOf('-') > -1);

    value = value.replace(/\D/g, '');
    value = value.replace(/\s/g, '');

    if (value === '') {
        return 0;
    }

    if (addNeg) {
        return '-' + value;
    }

    return value;
}