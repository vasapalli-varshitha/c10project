  var ship, ship_moving ;
  
function preload(){
  
  createCanvas(600,200);
  ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  sea = createSprite(1,200);
  ship = createSprite(350,230);
  seaImage = loadImage("sea.png");
}

function setup(){
  
  ship.addAnimation("moving",ship_moving);
  ship.scale = 0.1;
  sea.addImage("sea",seaImage);
  sea.scale =0.3;
  sea.velocityX=0.2;
  
}

function draw() {
  
  background(180);
  drawSprites();

  if(sea.x < 0){
    sea.x = sea.width/2;
  }
}


//Varshitha, first ground sprite ni create chesi, 
//tarvatha ship sprite ni create cheyali 
//lekapothe sea image ship ni hide chestundi, 
//inka sea.y adjust cheyali,
//images ni kuda scale cheyali. 
//ship collided avasaram leedu, function preload 
//lo danini teeseyi


