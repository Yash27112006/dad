var gameState = 0;
function preload(){
   sonImg = loadImage("child.png");
   sonImg2 = loadImage("child2.png");
   fatherImg = loadImage("father.png");
   backgroundImg = loadImage("background.jpg");
   backgroundImg2 = loadImage("background2.jpg");
}
function setup(){
    var canvas = createCanvas(800,500);

   
} 
function draw(){
  background(backgroundImg);
  // drawSprites();

   if(keyDown("m")){
      gameState = 8;
   }


   if(gameState === 0){
      ground = createSprite(400,480,800,70);
      ground.shapeColor = 63,72,74;
      son = createSprite(320,415,20,20);
      son.addImage(sonImg,100,100);
      son.scale = 0.25;
    father = createSprite(160,345,20,20);
    father.addImage(fatherImg,100,100);
    father.scale = 0.4;
    log = createSprite(350,195,610,30);
    log.shapeColor="black";
    button = createSprite(620,195,50,20);
    button.shapeColor="red";
    drawSprites();  
    textSize(18);
    fill("white");
    text("!!  Hi? Welcome to the lifecycle of a FATHER-SON RELATION  !!",70,200);
    fill("black");
    textSize(15);
    text("PRESS TO CONTINUE",550,170);
   if(mousePressedOver(button) && gameState === 0){
      gameState = 1;
   }
   }
   if(gameState === 1){
      log2 = createSprite(350,195,610,30);
      log2.shapeColor="black";

      button2 = createSprite(80,195,50,20);
      button2.shapeColor="red";
    
      drawSprites();
      textSize(18);
      fill("white");
      text("Ok so now we will learn ABCD. Are You READY?",170,200);
      fill("black");
      textSize(15);
      text("PRESS TO CONTINUE",50,170);
      if(mousePressedOver(button2) && gameState === 1){
         gameState = 2;
      }
   }

   if(gameState === 2){
      log3 = createSprite(350,195,610,30);
      log3.shapeColor="black";
  
      button3 = createSprite(620,195,50,20);
      button3.shapeColor="red";
    
      drawSprites();
      textSize(18);
      fill("white");
      text("Memorise it: A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z",50,200);
      fill("black");
      textSize(15);
      text("PRESS TO CONTINUE",550,170);
      if(mousePressedOver(button3) && gameState === 2){
         gameState = 3;
      }
   }
   if(gameState === 3){
      log4 = createSprite(350,195,610,30);
      log4.shapeColor="black";
     
      button4 = createSprite(80,195,50,20);
      button4.shapeColor="red";
    
      drawSprites();
      textSize(18);
      fill("white");
      text("I am going to ask you some questions now...READY??",160,200);
      fill("black");
      textSize(15);
      text("PRESS TO CONTINUE",50,170);
      if(mousePressedOver(button4) && gameState === 3){
         gameState = 4;
      }
   }
   if(gameState === 4){
      log5 = createSprite(350,195,610,30);
      log5.shapeColor="black";
    
      drawSprites();
      textSize(18);
      fill("white");
      text("What comes after K??",250,200);
      fill("black");
      if(keyDown("l") && gameState === 4){ 
         gameState = 5;
      }
   }
   if(gameState === 5){
      log6 = createSprite(350,340,80,30);
      log6.shapeColor="black";
      textSize(18);
      fill("white");
      text("L",340,345);
      log7 = createSprite(350,195,610,30);
      log7.shapeColor="black";
      button5 = createSprite(620,195,50,20);
      button5.shapeColor="red";
      drawSprites();
      textSize(15);
      text("WOW!! that's right",250,200);
      textSize(15);
      fill("black")
      text("PRESS TO CONTINUE",550,170);
      if(mousePressedOver(button5) && gameState === 5){
         gameState = 6;
      }
   }
   if(gameState === 6){
      log9 = createSprite(350,340,80,30);
      log9.shapeColor="black"; 
      log8 = createSprite(350,195,610,30);
      log8.shapeColor="black";
      drawSprites();
      textSize(18);
      fill("white");
      text("What comes before Z??",250,200);
      if(keyDown("y") && gameState === 6){ 
         gameState = 7;
      }
   }
   if(gameState === 7){
      log10 = createSprite(350,340,80,30);
      log10.shapeColor="black";
      log11 = createSprite(350,195,610,30);
      log11.shapeColor="black";
      button6 = createSprite(80,195,50,20);
      button6.shapeColor="red";
      drawSprites();
      textSize(18);
      fill("white");
      text("Y",340,345);
      textSize(15);
      text("WOW!! that's right",300,200);
      textSize(15);
      fill("black")
      text("PRESS TO CONTINUE",50,170);
      if(mousePressedOver(button6) && gameState === 7){
         gameState = 8;
      }
   }
   if(gameState === 8){
      log12 = createSprite(350,340,80,30);
      log12.shapeColor="black";
      log13 = createSprite(350,195,610,30);
      log13.shapeColor="black";
      button7 = createSprite(620,195,50,20);
      button7.shapeColor="red";
      drawSprites();
      textSize(15);
      fill("black")
      text("PRESS TO CONTINUE",550,170);
      textSize(15);
      fill("white");
      text("Wow!! you have answered coorect in alphabets...Now we will learn numbers",70,200);
      if(mousePressedOver(button7) && gameState === 8){
         gameState = 9;
      }
   }
   if(gameState === 9){
   background(backgroundImg2);
   button8 = createSprite(400,250,70,70);
   if(mousePressedOver(button8) && gameState === 9){
      gameState = 10;
   }
   drawSprites();
   }
   if(gameState === 10){
    father2 = createSprite(100,100,2,2);
    father2.addImage(fatherImg,100,100);
    father2.scale = 0.3;
    son2 = createSprite(320,415,20,20);
    son2.addImage(sonImg2,100,100);
    son2.scale = 0.70;
    drawSprites();  
   }
 

}
