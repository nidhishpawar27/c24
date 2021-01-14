var myEngine , myWorld, ground;

function setup() {
  createCanvas(1200,400);
  
  myEngine  = Matter.Engine.create();
  myWorld   = myEngine.world;



box1  = new Box(700,320,70,70);
box2 = new Box(920,320,70,70);
ground=new Ground(600,400,1200,20)
pig1=new Pig(810,350)
bird=new Bird(50,50);

log1  = new Log(810,260,300, PI/2);
  console.log(box2);
}



function draw() {

  Matter.Engine.update(myEngine);


  background(0);  
  fill("brown");
  rectMode(CENTER);
  

  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  ground.display();
  bird.display();
}