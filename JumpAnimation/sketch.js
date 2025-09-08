// Your Name Jayson
// Date 9/8/2025
// Jump Animation 
// Practice simulating gravity and using keyboard input

let pX = 300;
let pY = 350;
let pYV = 0;

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
  if (keyIsDown(65)) { //A
    pX -= 4;
  }
  if (keyIsDown(68)) { //D
    pX += 4;
  }
  if (keyIsDown(32)) { //SPACE
    pYV = 8;
  }
  if (pY < 350) {
    pYV -= 2;
  }
  if (pY >= 350) {
    pYV = 0;
  }
  pY -= pYV;
}

function drawPlayer(x, y) {
  fill('red');
  rect(x, y, 30, 40);
}