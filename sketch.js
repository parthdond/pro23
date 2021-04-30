var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var pack;
var invisibleline, invisibleline1, invisibleline2;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
 var package_option={
	restitution:0.5
   } 

   var ground_option= {
	isStatic:true
}

   var box1_option={
	isStatic:false
}

    var box2_option={
	isStatic:false
}

    var box3_option={
	isStatic:false
	}

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/3, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-30, width,10);
	groundSprite.shapeColor=color(255)

    invisibleline=createSprite(400,650,220,1)
    invisibleline.visible=false;

	

	box1 = createSprite(500, 610, 20,100);
	box1.shapeColor=color("red")

	box2 = createSprite(300,610, 20,100);
	box2.shapeColor=color("red")

	box3 = createSprite(400,660, 220,10);
	box3.shapeColor=color("red")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5,package_option);
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	

	//Create a Ground
	 ground = Bodies.rectangle(width/2, 650, width, 20 ,ground_option);
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(width/2, 650, width, 10 ,box1_option);
	 World.add(world, box1);
	 
	 box2 = Bodies.rectangle(width/2, 650, width, 10 ,box2_option);
	 World.add(world, box2);
	 
	 box3 = Bodies.rectangle(width/2, 650, width, 10 ,box3_option);
 	 World.add(world,  box3);

     //pack=new Package(width/2, 80, 50,50,{isStatic:true});
	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);




  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite.x=helicopterSprite.x
 // pack.x=packageSprite.x
  //pack.x=helicopterSprite.x

  keyPressed();
  keyPressed1();
  keyPressed2();

 // pack.display();
  drawSprites();
 
 //pack.position.x=packageSprite.x;
 //pack=packageSprite;

 text("DROP THE THE PACKAGE IN RED BOX",300,500)
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	 
	Matter.Body.setStatic(packageBody, false);
	   
	
  }
}


function keyPressed1() {
	if (keyCode == RIGHT_ARROW) {
		
	   helicopterSprite.x=helicopterSprite.x+2;
		  
	   
	 }
   }
   function keyPressed2() {
	if (keyCode == LEFT_ARROW) {
		
	   helicopterSprite.x=helicopterSprite.x-2;
		  
	   
	 }
   }