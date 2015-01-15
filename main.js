var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var leftPercent = 50;

// takes in a number of lines, makes a decision which line it would base it's length from
// decides whether it would go less than 100% or more than 100%
function lineLengthGenerator(firstLine, secondLine, thirdLine) {
  var firstLinePercent, secondLinePercent, thirdLinePercent
}

function lineLength(x1, y1, x2, y2) {
  return Math.sqrt((x2-x1) ^ 2 + (x2-x1) ^ 2)
}

function returnBasedOnPercent(percent, whenTrue, whenFalse) {
  return (Math.random() < percent/100 ? whenTrue : whenFalse);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function render() {
  var lines = []

  var x = canvas.width/2
  var y = canvas.height/2

  // if turn is 0, x coordinates change (moving horizontally)
  // if turn is 1, y coordinates change (moving vertically)
  var turn = 0;

  // move to centre of canvas

  context.beginPath();

  setInterval(function(){
    context.moveTo(x, y);
    if (turn == 0) {
      x = getRandomInt(1, canvas.width);
      context.lineTo(x, y);
      turn = 1;
    } else {
      y = getRandomInt(1, canvas.height);
      context.lineTo(x, y);
      turn = 0;
    }

    context.stroke();
  }, 300);
}

// moves left == y remains the same, x changes.

// context.moveTo(50, 100);
// context.lineTo(50, 200);
// context.moveTo(50, 200);
// context.lineTo(80, 200);
render();
