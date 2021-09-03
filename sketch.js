const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground,left,right,bridge,jointLink,joint;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(width/2,height-20,width,20)
  left = new Base(200,height/2,400,100)
  right = new Base(width-200,height/2,400,100)
bridge = new Bridge(15,{x:350,y:height/2-100})
joint = new Base(width-400,height/2,10,20)
Matter.Composite.add(bridge.body,joint)
jointLink = new Link(bridge,joint)
for (var i = 0; i <= 8; i++) {
  var x = random(width / 2 - 200, width / 2 + 300); 
  var y = random(-10, 140);
  var stone = new Stone (x, y);
  stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);
//rectMode(CENTER)




ground.display();
  bridge.show();
  left.display();
  right.display();
for (var stone of stones) {
  stone.display();
}
  //stone.display();
  
}
