/// <reference path="../../node_modules/@types/p5/global.d.ts" />
// this gives p5 autocomplete yay!

let particles = [];
let spawnRate = 2;
let tick = 0;

let rectSize = 200;
let rectGoal = 200;
let curRotate = 0;

let count = 123;
let dir = 1;

function setup() {
  createCanvas(600,400);
}

function draw() {
  let speed = .1;
  rectSize = rectSize*(1-speed)+rectGoal*speed;

  background(color('#000'));
  rectMode(CENTER);

  curRotate += .015*dir;

  push();
  translate(rectSize/50,rectSize/50);

  translate(width/2,height/2);
  rotate(curRotate*1.5);
  translate(-width/2,-height/2);
  strokeWeight(7);
  stroke(56,56,56,256);
  fill(color(0,0,0,0));
  rect(width/2,height/2,rectSize,rectSize);

  translate(width/2,height/2);
  rotate(PI/4);
  translate(-width/2,-height/2);
  strokeWeight(7);
  stroke(56,56,56,256);
  fill(color(0,0,0,0));
  rect(width/2,height/2,rectSize,rectSize);

  pop();


  push();

  translate(width/2,height/2);
  rotate(curRotate*1.5);
  translate(-width/2,-height/2);
  strokeWeight(7);
  stroke(256,256,256,256);
  fill(color(0,0,0,0));
  rect(width/2,height/2,rectSize,rectSize);

  translate(width/2,height/2);
  rotate(PI/4);
  translate(-width/2,-height/2);
  strokeWeight(7);
  stroke(256,256,256,256);
  fill(color(0,0,0,0));
  rect(width/2,height/2,rectSize,rectSize);

  pop();

  push()
  translate(rectSize/50,rectSize/50);
  textFont('Helvetica')
  textAlign(CENTER, CENTER);
  fill(color(56,56,56,256));
  textSize(64*(rectSize/rectGoal));
  text(`+${count}`, width/2, height/2)
  pop()

  textFont('Helvetica')
  textAlign(CENTER, CENTER);
  fill(color(256,256,256,256));
  textSize(64*(rectSize/rectGoal));
  text(`+${count}`, width/2, height/2)
}

function mouseClicked() {
  console.log("weee");
  rectSize+=50;
  dir*=-1;
  count += 1;
}