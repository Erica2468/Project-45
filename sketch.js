var boy, girl, male , female;
var boyImg, girlImg, maleImg, femaleImg;
var balloon, background;
var balloonImg, backgroundImg;

function preload() {
boyImg = loadImage("boy.png");
girlImg = loadImage("girl.png");
maleImg = loadImage("male.png");
femaleImg = loadImage("female.png");
balloonImg = loadImage("balloon.png");
background = loadImage("background.jpg");
}

function setup() {
  createCanvas(1000,800);
  boy = createSprite(100, 400, 20, 20);
  boy.addImage(boyImg);

  girl = createSprite(220, 400, 20, 20);
  girl.addImage(girlImg);

  female = createSprite(330, 370, 20, 20,);
  female.addImage(femaleImg);
  
  male = createSprite(440, 365, 20, 20);
  male.addImage(maleImg);

  balloon = createSprite(500, 400);  
  balloon.addImage(balloonImg);

  background.addImage(backgroundImg);

  boy.scale = 0.5;
  girl.scale = 0.45;
  female.scale = 0.6;
  male.scale = 0.63;
  balloon.scale = 0.6;
  
}


function draw() {
  background(backgroundImg);  
  drawSprites();
}