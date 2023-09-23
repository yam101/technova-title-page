let bg;
let y = 0;
function setup() {
  font = loadFont('fonts/fibberish.ttf');
  textFont(font);
  textSize(150);

  bg = loadImage("assets/background.png");
  createCanvas(1000, 600);

  playButton = createButton("Play");
  helpButton = createButton("Instructions");

  playButton.position(400, 250);
  helpButton.position(360, 350);
  playButton.mousePressed(change());
  helpButton.mousePressed();

}

function draw() {
  background(bg);
  fill(255);
  //stroke(148, 3, 252);
  //strokeWeight(5);
  text("title", 350, 200);

  fill(0, 0, 0, 100)
  rect(100, 100, 800, 400);


}

function change() {

}
