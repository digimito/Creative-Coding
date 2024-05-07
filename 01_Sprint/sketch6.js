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
  background(255,5);
  translate(width/2,height/2);
    
  noStroke();

  for(let i=0; i<anzahl; i=i+1){
     let xx=sin(frameCount/40);
     let x=map(xx,-1,1,radius*i*2,-radius*i*2);
     let yy=cos(frameCount/40);
     let y=map(yy,-1,1,radius*i*2,-radius*i*2);
     ellipse(y,x,grösse);
     grösse=i+10; 
     fill(0+i*20);
  }

  for(let i=0; i<anzahl; i=i+1){
     let xx=sin(frameCount/40);
     let x=map(xx,1,-1,radius*i*2,-radius*i*2);
     let yy=cos(frameCount/40);
     let y=map(yy,1,-1,radius*i*2,-radius*i*2);
     ellipse(y,x,grösse);
     grösse=i+10; 
     fill(0+i*20);
  }

push();

  rotate(90);
  for(let i=0; i<anzahl; i=i+1){
    let xx=sin(frameCount/20);
    let x=map(xx,1,-1,radius*i*2,-radius*i*2);
    let yy=cos(frameCount/20);
    let y=map(yy,1,-1,radius*i*2,-radius*i*2);
    ellipse(y,x,grösse);
    grösse=i+10; 
    fill(0+i*20);
  }

  for(let i=0; i<anzahl; i=i+1){
    let xx=sin(frameCount/20);
    let x=map(xx,-1,1,radius*i*2,-radius*i*2);
    let yy=cos(frameCount/20);
    let y=map(yy,-1,1,radius*i*2,-radius*i*2);
    ellipse(y,x,grösse);
    grösse=i+10; 
    fill(0+i*20);
  }

pop();    
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