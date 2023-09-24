let gameState = 0;
let titleScreenBackground;

function setup() {
  createCanvas(1000, 600);

  noStroke();

  font = loadFont('fonts/Abaddon Bold.ttf');
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
    partAIInstructionsMenu();
  } else if (gameState == 5) {
    loseScreen();
  }
}

function titleScreen() {
  background(titleScreenBackground);

  gameState = 0;

  textFont(titleFont);

  playButton.show();
  helpButton.show();
  backToMenuButton.hide();

  playButton.position(415, 350);
  helpButton.position(370, 450);

  playButton.mouseClicked(loseScreen);
  helpButton.mouseClicked(partAInstructionsMenu);

  // title text colour
  fill(255);
  textSize(150);
  textFont(titleFont);
  text("Breaking", 240, 200);
  text("the Binary", 170, 300);

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

function loseScreen() {
  background(57, 0, 64);

  gameState = 5;

  playButton.hide();
  helpButton.hide();

  fill(255);
  rect(100, 100, 800, 500);

  fill(115, 0, 113)
  textSize(30);

  text("Letter of Resignation", 150, 150);
}
