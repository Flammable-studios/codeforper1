// Your Name Jayson
// Date 9/8/2025
// Jump Animation 
// Practice simulating gravity and using keyboard input

let pX = 300;
let pY = 350;

function setup() {
  createCanvas(600, 400);
  background(240);
  noStroke();
}

function draw() {
  background(240);
  // draw the ground
  fill('green');
  rect(0, 390, width, 20);


  //draw the player @ (pY, pX)
  drawPlayer(pX, pY);
  keyPressed();
}

function drawPlayer(x, y) {
  fill('red');
  rect(x, y, 30, 40);
}
function keyPressed() {
  if (keyCode === 65 && keyIsPressed) { //A
    pX -= 3;
  }
  if (keyCode === 68 && keyIsPressed) { //D
    pX += 3;
  }
  if (keyCode === 32 && keyIsPressed) {
    pY -= 3;
  }
  if (pY === 355) {

  }
}