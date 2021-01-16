
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var spaceship, shaceshipImage;
var back, backImage;
var backgroundImage;
var asteroid, asteroidGroup;
var asteroid1Image;
var score = 0;

var maxAsteroid=100;

function preload()
{
	shaceshipImage = loadImage("spaceship.png");
	backImage = loadImage("back2.jpg");
	asteroid1Image = loadImage("astter.png");
////creating the groups	
	asteroidGroup = new Group();
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(800, 700);

	Engine.run(engine);

	back = createSprite(300, 300);
    back.addImage(backImage);
    back.velocityY = 1;
	
	spaceship = createSprite(400, 500);
	spaceship.addImage(shaceshipImage);
	spaceship.scale = 0.2;


}
	

	//Create the Bodies Here.



function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
 fill("white"); 
  text("Score: "+ score, 10,200);


  if(back.y>400){
    back.y = 300;
  }

  if(keyDown(LEFT_ARROW)){
    spaceship.x = spaceship.x - 3;
  }
  if(keyDown(RIGHT_ARROW)){
    spaceship.x = spaceship.x +3;
  }



spawnasteroid();
  
  drawSprites();
 
}

function spawnasteroid(){
	if(frameCount% 240===0){
	  asteroid = createSprite(200, -50);
	  asteroid.addImage(asteroid1Image);
	  asteroid.scale = 0.1;
	  asteroid.x = Math.round(random(120, 400));
	  asteroid.velocityY = 1;
	  asteroid.lifetime = 800;
	  
	  asteroidGroup.add(asteroid);

	}
  }
