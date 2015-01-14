var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var leftPercent = 50;

function lineLengthGenerator(firstLine, secondLine, thirdLine) {
  var firstLinePercent, secondLinePercent, thirdLinePercent
}

function lineLength(x1, y1, x2, y2) {
  return Math.sqrt((x2-x1) ^ 2 + (x2-x1) ^ 2)
}

function returnBasedOnPercent(percent, whenTrue, whenFalse) {
  return (Math.random() < percent/100 ? whenTrue : whenFalse);
}

function turn() {

}

function render() {
  var lines = []

}

context.beginPath();
context.moveTo(200, 100);
// moves left == y remains the same, x changes.
context.lineTo(50, 100);

// context.moveTo(50, 100);
// context.lineTo(50, 200);
// context.moveTo(50, 200);
// context.lineTo(80, 200);
context.stroke();
