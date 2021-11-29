const Engine = Matter.Engine,
      World = Matter.World,
      Events = Matter.Events,
      Bodies = Matter.Bodies; 
var balls = [];
var plinkos = [];
var divisions =[];
var ball;
//crie a variável de estado de jogo e dê um valor inicial a ela
var Contagem = 5
//crie a variável contador e ajuste seu valor para 0; Elva vai contar quantas bolas o jogador já lançou
var divisionHeight=300;
var score = 0;
var Estado = "COMECO"

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
  
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175));
    }

    for (var j = 75; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375));
    }
    
}
 
function draw() {
  background("black");
  textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  
  noStroke()
  text("Contagem: "+Contagem,600,40)
  if(Contagem<=0){
  Estado = "Fim";
  push()
  textSize(35)
  fill("red")
  text("Fim de jogo",300,315)
  pop()
}
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);
  Engine.update(engine);
  ground.display();

  //faça com que o jogo se encerre se o contador chegar a 5. Coloque uma mensagem de Game OVer na tela
  if (ball!=null && ball.body.position.y > 700){
    if(0 < ball.body.position.x && ball.body.position.x < 300) {
         score += 500;
         ball = null;
     }  else if (300 < ball.body.position.x && ball.body.position.x < 600) {
         score += 100;
         ball = null;
     }  else if (600 < ball.body.position.x && ball.body.position.x < 800) {
         score += 200;
         ball = null; 
     }      
}
  /*
  atualize a pontuação de acordo com o número mostrado no espaço onde a bola caiu
  Se a bola estiver em uma posição y maior que 760, usar if else para:
  - Se a posição x da bola for maior que 0 e menor que 300 -> 500 pontos.
  - Se a posição x da bola é maior que 301 e menor que 600 -> 100 pontos.
  - Se a posição x da bola é maior que 601 e menor que 800 -> 200 pontos

  *Assim que a pontuação for dada, fazer a bola ser nula
  */

  for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();  
  }
 
    if(ball!=null) {
       ball.display();
  
  
    }

   for (var k = 0; k < divisions.length; k++) {
     divisions[k].display();
   }
 
}

function mousePressed() {
  // faça com que a bola só seja gerada se o estado de jogo estiver não for o de fim
  //aumente o contador de chanceas a cada vez que uma bola for gerada
  if(Estado!= "Fim"){
  ball= new Ball(mouseX, 10, 10, 10);
  balls.push(ball)
  Contagem--
}

}

