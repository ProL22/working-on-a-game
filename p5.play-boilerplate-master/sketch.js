//make universal variables for gun,score and groups
var gun;
var bulletGroup,henGroup;
var score=0;
function preload(){
  //loading images for all the variables
  G=loadImage("images/gun.png");
  B=loadImage("images/bullet.png");
  H=loadImage("images/hen.png")
  backgroundImage=loadImage("images/bg.png");
}
function setup() {
  //creating canvas
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  // creating gun and giving it the loaded image
  gun =createSprite(300, 200, 50, 50);
  gun.addImage(G);
  gun.scale=0.15;
  bulletGroup = createGroup();
 henGroup = createGroup();
 

}

function draw() {
  background(backgroundImage);  
  // calling the function in the program
  bullet();
  hen();
 textSize(20);
 fill("blue");
 text("Score "+score,1500,60);
  gun.y=mouseY;
  if(bulletGroup.isTouching(henGroup)){
    henGroup.destroyEach();
    bulletGroup.destroyEach();
    score=score+1;
  }
  
  drawSprites();
}
function bullet (){
  // wrote if condition which states- if we are pressing spaces then bullet will apwan and we ae giving it velocity and also we are making it move with the gun and we have added a image
  if(keyDown("right")){
    var bullet=createSprite(400,80, 50, 50);
    bullet.addImage(B);
    bullet.scale=0.5;
    bullet.velocityX=5;
    bullet.x=gun.x-10;
    bullet.y=gun.y;
    bulletGroup.add(bullet);
  }
}
  function hen (){
    if (frameCount %60 === 0){
      var bird=createSprite(random(500,2400),random(500,900),20,20);
      bird.addImage(H);
      bird.velocityY=-(3+2*score/10);
      henGroup.add(bird);
      if(bird.y<100){
        score=score-5;
      }
     

  }
}
