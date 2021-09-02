var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var red;
var orangeleaf;
var leaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimage = loadImage("apple.png");
  redimg = loadImage("redImage.png");
  orange = loadImage("orangeLeaf.png");
  leafimg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Making background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit
rabbit = createSprite(180,360,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);




}

apple.lifetime(40)

function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  


  //making rabbit move with mouse
  rabbit.x = mouseX

  //spawning apple and leaves
 spawnApple();
 spawnRedleaf();
 spawnleaf();
 spawnorangeleaf();



  drawSprites();
}


//making apple spawn
function spawnApple(){

  if (frameCount % 60 === 0) {
  apple=createSprite(0,0,40,40);
  apple.addImage("apple",appleimage)
  apple.scale = 0.1;
  apple.velocityY=3;
  apple.x = Math.round(random(10,390));
  apple.depth = rabbit.depth
  rabbit.depth = apple.depth + 1
  

 }


}


//making red leaf spawn
function spawnRedleaf(){

  if (frameCount % 80 === 0) {
  red=createSprite(0,0,40,40);
  red.addImage("red",redimg)
  red.scale = 0.1;
  red.velocityY=3;
  red.x = Math.round(random(10,100));
  red.depth = rabbit.depth
  rabbit.depth = red.depth + 1
  
 }


}


//making orange leaf spawn
function spawnorangeleaf(){

  if (frameCount % 100 === 0) {
  orangeleaf=createSprite(0,0,40,40);
  orangeleaf.addImage("orangeleaf",orange)
  orangeleaf.scale = 0.1;
  orangeleaf.velocityY=3;
  orangeleaf.x = Math.round(random(10,100));
  orange.depth = rabbit.depth
  rabbit.depth = orange.depth + 1
  
 }


}

//making leaf spawn
function spawnleaf(){

  if (frameCount % 120 === 0) {
  leaf=createSprite(0,0,40,40);
  leaf.addImage("leaf",leafimg)
  leaf.scale = 0.1;
  leaf.velocityY=3;
  leaf.x = Math.round(random(10,100));
  leaf.depth = rabbit.depth
  rabbit.depth = leaf.depth + 1
  
 }


}






