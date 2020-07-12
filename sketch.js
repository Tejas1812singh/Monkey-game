//Global Variables
var player,ground;
var bananaImage,obstacleImage;
var obstacleGroup;
var score,background;


function preload(){
  
  backImage=loadImage("jungle.jpg");
  player_running=
    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  bananaImage=loadImage("Banana.png");
  obstacleImage=loadImage("stone.png")
  
}


function setup() {
  createCanvas(600,300);
  
  background1=createSprite(0,0,800,800);
  background1.addImage("backimage",backImage);
  background1.velocityX=-2;
  background1.x=background1.width/2;
  
  player=createSprite(50,180,20,20);
  player.addImage("player1",player_running);
  
  bananaGroup=newGroup();
  obstacleGroup=newGroup();
  ground=createSprite(200,180,400,20);
  
  score=0;
  
}


function draw(){
 background(255); 
  ground.visible=false;
  monkey.collide(ground);
   if (background1.x<0)
    {
      background1.x=background1.width/2;
    }
  
  food();
  obstacles();
  
 
  
  if(keyDown("space")&&player.y>150)
  {
    player.velocityY=-12;
  }
  player.velocityY=player.velocityY=0.8;
  
   if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(player.isTouching(bananaGroup))
     {
     bananaGroup.destroyEach;
       score=score=2;
    }
  
  
  if(obstaclesGroup.is(player))
  {
    player.scale=0.2;
  }
  
  
  switch(score){
    case 10 : player.scale=0.12;
      break;
      case 20 : player.scale=0.14;
      break;
      case 30 : player.scale=0.16;
      break;
      case 40 : player.scale=0.18;
      break;
      default: break;
  
  }
drawSprites();  
      
       stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
}
  function food()
{
  if (World.frameCount % 80 === 0)
  {
    var banana=createSprite(249,287,40,10);
  banana.y=randomNumber(320,200);
  banana.addImage("Banana");
  banana.velocityX=-5;
  banana.lifetime=225;
  banana.scale=0.1;
  bananagroup.add(banana); 
  }
}

function obstacles()
{
  if(World.frameCount % 300 ===0)
  {
    var obstacle=createSprite(0,340,40,10);
    obstacle.y=randomNumber(120,395);
    obstacle.addImage("Stone");
    obstacle.velocityX=-5;
    obstacle.lifetime=135;
    obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
}
  }
    

