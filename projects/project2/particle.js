export default class Particle
{
  constructor(x, y) {
    this.x=x;
    this.y=y;
    this.dx=random(-1,1);
    this.dy=random(-1,1);
    this.lifetime=500+random(500);
    this.curlife=this.lifetime;
    let start=255-100
    this.color=color(start+random(100)
      ,start+random(100)
      ,start+random(100), 255);
  }

  draw() {
    noStroke();
    fill(this.color);
    let distance_from_mid_life=Math.abs(this.lifetime/2-this.curlife);
    let size = (1-(distance_from_mid_life/(this.lifetime/2)));
    size = easeInOutSine(size);
    size *= 150;
    circle(this.x,this.y, size);
  }

  update() {
    this.x+=this.dx;
    this.y+=this.dy;
    this.curlife-=1;
  }
}

function easeInOutSine(x) {
  return -(cos(PI * x) - 1) / 2;
}