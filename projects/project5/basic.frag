#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTexCoord;
uniform vec2 u_resolution; // This is passed in as a uniform from the sketch.js file
uniform float u_time;

const int iterations = 100;
const float threshold = 100.0;
const float x_user_coord = 2.0;

void main() {

  // position of the pixel divided by resolution, to get normalized positions on the canvas
  vec2 st;
  //origin
  st.x = -x_user_coord + (vTexCoord.x)*2.0*x_user_coord;
  st.y = -x_user_coord*(u_resolution.y/u_resolution.x) + (vTexCoord.y)*2.0*x_user_coord*(u_resolution.y/u_resolution.x);

  float x0 = 0.0;
  float c1 = st.x;
  float y0 = 0.0;
  float c2 = st.y;

  int count = 0;

  for (int i=0; i<iterations; i++)
  {
    float old_x = x0;
    float old_y = y0;
    x0 = old_x*old_x-old_y*old_y+c1;
    y0 = 2.0*old_x*old_y+c2;

    if (x0*x0+y0*y0 >= threshold)
    {
      break;
    }

    count++;
  }

  if (x0*x0+y0*y0 < threshold)
  {
    
      gl_FragColor = vec4(vec3(
      sin(float(count/2)+u_time*.3)/2.0+.5
      ,sin(float(count/2)+u_time*.5)/2.0+.5
      ,sin(float(count/2)+u_time*.7)/2.0+.5
      ),1.0); 
  }
  else
  {
    gl_FragColor = vec4(vec3(
      sin(float(count/2)+u_time*.3)/2.0+.5
      ,sin(float(count/2)+u_time*.5)/2.0+.5
      ,sin(float(count/2)+u_time*.7)/2.0+.5
      ),1.0); 
  }


  //gl_FragColor = vec4(st.x,st.y,0.0,1.0); 
}