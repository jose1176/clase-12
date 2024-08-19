var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 // loadImage de paht (camino)
 pathImg = loadImage('path.png');// estaba mal escrito path y la variable se duplicaba
  //loadAnimation de boy (niño)
  boyImg = loadImage ("Runner-1.png","Runner-2.png");// es animacion por lo que se colocan las dos imagenes 
  bombImg = loadImage ("bomb.png");
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
path=createSprite(200,200);
//agregar imagen de path
path.addImage(pathImg);
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.velocityY = 4;
path.scale=1.2;

//crear sprite de boy (niño)
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("jakeRunning",boyImg);




  
// crear left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 6;
  
  // el niño se mueve en el eje x con el mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //código para reiniciar el fondo
  if(path.y > 500 ){
    path.y = height/2;
  }
  
  drawSprites();
} 