let gameState = 0;
let titleScreenBackground;

function setup() {
  createCanvas(1000, 600);

  noStroke();

  font = loadFont('fonts/Abaddon Bold.ttf');
  titleFont = loadFont('fonts/fibberish.ttf');
  girlImage = loadImage('assets/girl.png');
  titleScreenBackground = loadImage("assets/background.png");
  loseScreenBackground = loadImage("assets/loseBackground.png");

  playButton = createButton("Play");
  helpButton = createButton("Instructions");
  backToMenuButton = createButton("Back to Title Screen");
  continueButton = createButton("Continue...");
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
  } else if (gameState == 6) {
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
  continueButton.hide();

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

  image(girlImage, 100, 380);

}

function partAInstructionsMenu() {
  background(titleScreenBackground);

  gameState = 1;

  textFont(titleFont);

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
  continueButton.show();
  continueButton.position(600, 520);

  fill(255);
  rect(100, 100, 800, 500);

  fill(115, 0, 113)
  textSize(60);
  textFont(titleFont);

  text("LETTER OF RESIGNATION", 205, 190);

  textSize(30);
  textFont(font);

  text("To whom it may concern,", 175, 250);
  text("I am writing to let you know that I am formally \nresigning as a web developer. I do not think I am \nfit for this position, and I believe that I am \nbringing down the team. I do not believe that I \nbelong in this industry. Thank you for the \nopportunity and I apologize for my abrupt \nresignation.", 175, 300);
  
}

function winScreen() {

}
