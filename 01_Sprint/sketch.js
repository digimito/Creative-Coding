let sketchrunning=1;
angleMode(DEGREES);

function setup() {
  createCanvas(windowWidth,windowHeight);
  ellipseMode(CENTER);
  noStroke();

}

function draw() {
  background(210,50,50,1);
  translate(width/2,height/2);
  rotate(40);
  
  let cc=sin(frameCount/30);
  let c=map(cc,1,-1,-width/4,width/4);
  let dd=cos(frameCount/100);
  let d=map(dd,1,-1,-height/4,height/4);
  fill(255,50);
  circle(c,d,100,100);
  circle(d,c,100,100);

  let ee=sin(frameCount/30);
  let e=map(ee,-1,1,-width/4,width/4);
  let ff=cos(frameCount/100);
  let f=map(ff,-1,1,-height/4,height/4);
  fill(255,50);
  circle(e,f,100,100);
  circle(f,e,100,100);
 
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
