var mouse;
var cat;
var bg;

function preload(){

    mouseimg1=loadAnimation("images/mouse1.png");
    catimg=loadAnimation("images/cat1.png");
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png");
    catimg2=loadAnimation("images/cat2.png","images/cat3.png");
    bg=loadImage("image/garden.png");
    mouseimg4=loadAnimation("images/mouse4.png");
    catimg4=loadAnimation("images/cat4.png");
}
function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(500,600,50,80);
cat.addAnimation("catSleeping",catimg);
cat.scale=0.2;
mouse=createSprite(590,650,80,5);
mouse.addAnimation("mouseStanding",mouseimg1);
mouse.scale=0.15;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLastimg",catimg4);
        cat.x=300;
        cat.scale=0.2;
        cat.changeAnimation("catlastImg")
        mouse.addAnimation("mouseLastimg",mouseimg4)
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastimg")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
}

if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg2);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay=25;
}

}
