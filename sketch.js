const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var leftsideObj, rightsideObj, bottomObj, topObj;
var groundObj, bgImg;
var engine, world;
var divisionHeight = 200 
var particles = [];
var plinkos = [];
var divisions = [];

function preload() {
  bgImg = loadImage("bg.jpg");
}
function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  leftsideObj = new Boundries(5,790,10,2000);
  rightsideObj = new Boundries(1295,790,10,2000);
  bottomObj = new Boundries(5,595,3000,10);
  topObj = new Boundries(5,5,3000,10);

  groundObj = new Ground(5,785,2000,10);

  for(var k = 0; k <= width; k = k + 80) {
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
   }

  for(var j = 50; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 75, 10));
    }
  
  for(var j = 75; j <= 1250; j = j + 50){
      plinkos.push(new Plinko(j, 125, 10));
    }

  for(var j = 50; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 175, 10));
    }

  for(var j = 75; j <= 1250 - 10; j = j + 50){
      plinkos.push(new Plinko(j, 225, 10));
    }

    for(var j = 50; j <= width; j = j + 50) {
      plinkos.push(new Plinko(j, 275, 10));
    }

    for(var j = 75; j <= 1250 - 10; j = j + 50){
      plinkos.push(new Plinko(j, 325, 10));
    }

}



function draw() {
  background(bgImg); 
  Engine.update(engine);
  
  groundObj.display();

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
 }

  for (var i = 0; i < plinkos.length; i++) {   
    plinkos[i].display();
 } 

 if(frameCount%60===0) {
  particles.push(new Particle(random(width/2 + 1000, width/2 - 1000),10,10));
}

 for (var j = 0; j < particles.length; j++) {
   particles[j].display();
}

  leftsideObj.display();
  rightsideObj.display();
  bottomObj.display();
  topObj.display();

  drawSprites();
}