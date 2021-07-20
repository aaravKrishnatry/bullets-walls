var car,wall,speed,weight;
function setup() {
  createCanvas(1370,400);

speed=random(55,90)
 weight=random (400,1500);
 thickness=random (22,83);
  bullet= createSprite(50, 200, 50, 50);
  bullet.velocityX=speed;
  wall=createSprite(1360,200,100,400)
    bullet.shapeColor="blue"
    wall.shapeColor="pink"
}

function draw() {
  background("black");  
  
  if(hasCollided(bullet,wall))
  { 
    bullet.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(deformation>10)
    {
      
      wall.shapeColor = "blue";
      
  
    }  

    
    if(deformation <10 )
    {
      
      wall.shapeColor =  "red";
    }
  } 
drawSprites();
}

function hasCollided (lBullet,lwall)
{
  bulletEdge=lBullet.x + lBullet.width
  wallEdge=lwall.x
  if (bulletEdge>=wallEdge){
    return true;
  }
  return false;
}