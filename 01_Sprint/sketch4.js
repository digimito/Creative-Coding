function setup() {
    createCanvas(windowWidth,windowHeight);
    ellipseMode(CENTER);
  
}
  
function draw() {
    background(210,50,50,1);
    translate(width/2,height/2);
  
    let aa=sin(frameCount*2);
    let a=map(aa,1,-1,200,-200);
    let bb=cos(frameCount);
    let b=map(bb,-1,1,200,-200);
    point(a,b);
    point(b,a);
}