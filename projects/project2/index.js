import Particle from "./particle.js";
import Particles from "./particle.js";

let particles = [];
let spawnRate = 2;
let tick = 0;
console.log("weeoo");

window.setup = function () {
  createCanvas(600,400);

  // for (let x=0; x<20; x++)
  // {
  //   particles.push( new Particle(random(600), random(400)) );
  // }
}

window.draw = function () {
  background(color('#333333'));
  tick += 1;

  if (tick>=spawnRate) {
    tick = 0;
    particles.push( new Particle(random(600), random(400)) );
  }
  
  for (let particle of particles)
  {
    particle.update();
    particle.draw();
  }

  for (let i=particles.length-1; i>=0; i--)
  {
    if (particles[i].curlife <= 0)
    {
      particles.splice(i,1);
    }
  }
}