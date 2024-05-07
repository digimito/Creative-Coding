function setup() {
    createCanvas(windowWidth,windowHeight);
    ellipseMode(CENTER);
  
}

function draw() {
    
    let anzahl=windowWidth;
    //let radius=sin(frameCount/50);
    let radius=mouseX
    //let rr=map(radius, -1,1,10,20);
    background(110,50,50);
    noFill();
    //initialisieren, Bedinung, Update:
    for(let i=0; i<10; i=i+1){
      for(let j=0; j<10; j=j+1){
        ellipse(radius+j*2*radius,radius+i*2*radius,2*radius,2*radius);
      }
    }
}  