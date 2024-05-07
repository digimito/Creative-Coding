function setup() {
    createCanvas(windowWidth,windowHeight);
    ellipseMode(CENTER);
  
}
  
  function draw() {
    background(210,50,50,1);
    let xx=sin(frameCount/50);
    let x=map(xx,-1,1,200,-200);
    let yy=cos(frameCount/50);
    let y=map(yy,-1,1,200,-200);
    fill(100,200,100);
    point(y+205,x+205);
    point(y+205,y+205);
    point(y+205,205);
    point(205,x+205);
}