let theShader;
var elem = document.getElementById("canvas");

function preload(){
  // load the shader
  theShader = loadShader('./basic.vert', './basic.frag');
}

function setup() {
  // shaders require WEBGL mode to work
  let canvas = createCanvas(500, 500, WEBGL);
  canvas.id("canvas");
  noStroke();

  elem = document.getElementById("canvas");
  elem.onclick = test;
}

function draw() {  
  theShader.setUniform("u_resolution", [width, height]);
  theShader.setUniform("u_time", millis() / 1000.0); // we divide millis by 1000 to convert it to seconds
  theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]); // we flip Y so it's oriented properly in our shader
  // shader() sets the active shader with our shader
  shader(theShader);

  // rect gives us some geometry on the screen
  rect(0,0,width, height);

  if (fullscreen())
  {
    if (width != windowWidth && height != windowHeight)
    {
      resizeCanvas(windowWidth, windowHeight);
    }
  }
  else
  {
    resizeCanvas(600, 600);
  }
}

function test() { 
      
  // Set the value of fullscreen 
  // into the variable 
  //let fs = fullscreen(); 
    
  // Call to fullscreen function 
  //fullscreen(!fs);  

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
} 

function keyPressed() {
}

function windowResized(){
  //resizeCanvas(windowWidth, windowHeight);
}

