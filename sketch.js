var  database;
var gameState=0;
var playerCount,form,game,player;
var allPlayers;
var distance = 0;
var car1,car2,car3,car4,cars



function preload(){
track = loadImage("track.jpg")
car1_Img = loadImage("car1.png")
car2_Img = loadImage("car2.png")
car3_Img = loadImage("car3.png")
car4_Img = loadImage("car4.png")

}






function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);
  game = new Game();
  game.getState(); 


  game.start();



}

function draw(){
 if(playerCount === 4){
  game.update(1);
 }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
game.end();
  }
}



