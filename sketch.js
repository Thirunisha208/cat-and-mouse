var rat,ratImg;
var mouse_playing,mouse_teasing;
var cat,catImg;
var cat_walking,cat_sitting; 
var ground,groundImg;
function preload() {
    //load the images here
    ratImg = loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png");
    catImg = loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png");
    gardenImg = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(0,0,1000,800);
    garden.addImage("bg",gardenImg);
    garden.scale = 1.8;

    rat = createSprite(100,475,60,60);
    rat.addAnimation("teasing",ratImg);
    rat.scale = 0.20;

    cat = createSprite(710,500,70,70);
    cat.addAnimation("sitting",catImg);
    cat.scale = 0.20;

   

}
 
function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-rat.x<cat.width/2 + rat.width/2 &&
        rat.x-cat.x<cat.width/2 + rat.width/2 ){
        }

      cat.debug = true;
      cat.setCollider("rectangle",0,0,cat.width,cat.height);

      rat.debug = true;
      rat.setCollider("rectangle",0,0,rat.width,rat.height);

      keyPressed();

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown("left_Arrow")){
  cat.velocityX = -2;
  cat.changeAnimation("walking",catImg);
  
  rat.changeAnimation("playing",ratImg);
  }
 
  if(cat.isTouching(rat)){
  cat.addAnimation("sitting",catImg);
  
  rat.addAnimation("seaching",ratImg);

  cat.velocityX = 0;


  }

}
