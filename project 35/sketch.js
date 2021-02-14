const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var airballon;
var backgroundimg;


function preload() {
  backgroundimg = loadImage("images/bg.png");
}

function setup() {
  createCanvas(1600, 800);
  engine = Engine.create();
  world = engine.world;

  airballon = new Airballon(500,200,200,300)
}

function draw() {
  background(backgroundimg);
  Engine.update(engine);

  if(keyDown(LEFT_ARROW)){
    changePosition(-2,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    changePosition(2,0);
  }
else if(keyDown(UP_ARROW)){
  changePosition(0,-2);
}
 else if(keyDown(DOWN_ARROW)){
   changePosition(0,2)
 }

  airballon.display();
}
function changePosition(x,y){
  airballon.x = airballon.x+x;
  airballon.y = airballon.y+y;
}







