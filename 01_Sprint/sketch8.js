let radius;
let colorA, colorB;
let breite=100;

function setup(){
    createCanvas(windowWidth,windowHeight);
    background(200);
    colorA=color(100,0,0,10);
    colorB=color(0,0,100,10);
    stroke(100,100);
}

function draw(){
    background(200,1);
    translate(width/2,height/2);
    for(let i=0; i<10; i=i+1){
     rotate(3);
     let ee=sin(frameCount/90);
     let e=map(ee,1,-1,-width/4,width/4);
     let ff=cos(frameCount/45);
     let f=map(ff,-1,1,-height/4,height/4);
     let pos=map(i*breite,0,width,0,1);
     let colorC=lerpColor(colorA,colorB,pos);
     fill(colorC);
     circle(f,e,150);
     circle(e,f,30);  
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