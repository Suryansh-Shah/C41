var canvas;
var backgroundImage, bgImg, car1_img, car2_img, track;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2,fuels, powerCoins;
var cars = [];
var fuelImage, powerCoinImage,obstacle1,obstacle1Image,obstacle2Img,obstacle2;
var title;
//BP
function preload() {
  backgroundImage = loadImage("images/background.png");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  track = loadImage("images/track.jpg");
  fuelImage = loadImage("images/fuel.png");
  powerCoinImage = loadImage("images/goldCoin.png");
  lifeImage = loadImage("images/life.png");
  obstacle1Image = loadImage("images/obstacle1.png"); 
  obstacle2Image = loadImage("images/obstacle2.png");

}

//BP
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
 
}

//BP
function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
  if (gameState === 2) {
    game.showLeaderboard();
    //game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
