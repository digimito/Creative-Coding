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
    background(255,50);
    translate(width/2,height/2);
    noFill();

    for(let i=0; i<anzahl; i=i+1){
        for(let j=0; j<anzahl; j=j+1){
         let xx=sin(frameCount/40);
         let x=map(xx,-1,1,radius*j*2,-radius*j*2);
         let yy=cos(frameCount/40);
         let y=map(yy,-1,1,radius*j*2,-radius*j*2);
         ellipse(y,x,grösse);
         grösse=j+30; 
         stroke(0+j*30,100);
         strokeWeight(2);
         rotate(12);
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