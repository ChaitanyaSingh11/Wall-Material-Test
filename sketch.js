// creating bullet and wall variables
var bullet, bulletimg;
var speed, weight;
var wall, thickness;
var bg1, bg2, bg3, rand;
var tank, tank1, tank2, tank3;

function preload() {
  bulletimg = loadImage("Bullet.png");
  // loading bg images
  bg1 = loadImage("bg1.jpg");
  bg2 = loadImage("bg2.jpg");
  bg3 = loadImage("bg3.jpg");
  // loading tank images
  tank1 = loadImage("Tank1.png");
  tank2 = loadImage("Tank2.png");
  tank3 = loadImage("Tank3.png");
}

function setup() {
  createCanvas(1300, 400);
  // random value for bg and tank
  rand = Math.round(random(1, 3));
  // random value for speed, weight and thickness
  speed = random(55, 90);
  weight = random(400, 1500);
  thickness = random(22, 83);
  //creating Bullet
  bullet = createSprite(150, 200);
  bullet.addImage("bulletimg", bulletimg);
  // creating wall
  wall = createSprite(1200, 200, thickness, height / 2);
  wall.shapeColor = (80, 80, 80);
  // creating tank
  tank = createSprite(100, 200);
  tank.scale = 0.5;
}

function draw() {
  if (rand == 1) {
    background(bg1);
    tank.addImage("tank1", tank1);
  } else if (rand == 2) {
    background(bg2);
    tank.addImage("tank2", tank2);
  } else if (rand == 3) {
    background(bg3);
    tank.addImage("tank3", tank3);
  }
  if (keyDown("space"))
    bullet.velocityX = speed;

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = (0.5 * weight * speed * speed) / Math.pow(thickness, 3);
    if (damage > 10)
      wall.shapeColor = "red";
    else
      wall.shapeColor = "LimeGreen";
  }
  drawSprites();

  stroke(0);
  strokeWeight(3);
  fill("Gold");
  textSize(30);
  text("Bullet Speed :" + Math.round(speed), 50, 380);
  text("Bullet Weight :" + Math.round(weight), 300, 380);
  fill("HotPink");
  text("Wall Thickness : :" + Math.round(thickness), 1000, 370);

}