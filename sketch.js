let gameState = 0;
let titleScreenBackground;

function setup() {
  createCanvas(1000, 600);

  noStroke();

  titleFont = loadFont('fonts/fibberish.ttf');
  titleScreenBackground = loadImage("assets/background.png");

  playButton = createButton("Play");
  helpButton = createButton("Instructions");
  backToMenuButton = createButton("Back to Title Screen");
}

function draw() {
  checkGameState();
}

function checkGameState() {
  if (gameState == 0) {
    titleScreen();
  } else if (gameState == 1) {
    partAIInstructionsMenu(0);
  }
}

function titleScreen() {
  background(titleScreenBackground);

  gameState = 0;

  textFont(titleFont);

  playButton.show();
  helpButton.show();
  backToMenuButton.hide();

  playButton.position(400, 250);
  helpButton.position(360, 350);

  playButton.mouseClicked(partAInstructionsMenu);
  helpButton.mouseClicked(partAInstructionsMenu);

  // title text colour
  fill(255);
  textSize(150);
  textFont(titleFont);
  text("title", 350, 200);

}

function partAInstructionsMenu() {
  background(titleScreenBackground);

  gameState = 1;

  playButton.hide();
  helpButton.hide();
  backToMenuButton.show();

  backToMenuButton.position(300, 350);

  backToMenuButton.mouseClicked(titleScreen);

  fill(255);
  textSize(150);
  text("instructions", 150, 200);

  textSize(30);
  text("Press the spacebar to move through the text.", 200, 300);

}
