var trex;
var trex_running;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200);
  trex = createSprite(50,160,20,20);
  trex.addAnimation("running",trex_running);
  edges = createEdgeSprites()
}


function draw(){
  background("white")
  drawSprites();

  if (keyDown("space")){
    trex.velocityY = -10          
  }
  trex.velocityY = trex.velocityY + 0.5;
trex.collide(edges[3]);


}


