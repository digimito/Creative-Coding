let anzahl=10;
let radius=20;
let grösse;
let breite=100
angleMode(DEGREES);

function setup() {
    createCanvas(windowWidth,windowHeight);
    ellipseMode(CENTER);
    
}
  
  function draw() {
    background(200,0,0,15);
    translate(width/2,height/2);
    fill(0,100);
    noStroke();

    for(let i=0; i<anzahl; i=i+1){
        for(let j=0; j<anzahl; j=j+1){
         rotate(180);
         let xx=sin(frameCount/40);
         let x=map(xx,-1,1,radius*j*2,-radius*i*2);
         let yy=cos(frameCount/40);
         let y=map(yy,-1,1,radius*j*2,-radius*i*2);
         ellipse(y,x,grösse);
         grösse=i+8; 
        }
    }
}

function keyTyped(){
 
    if(key=='s'){
      
        if(sketchrunning==1){
          noLoop();
          sketchrunning=0;
        }else if(sketchrunning==0){
          loop();
          sketchrunning=1;
        }
    }
    //saveCanvas("testExport", "png");
  
    if(key==='e'){
      saveGif('sprint01_',15)
    }
  }