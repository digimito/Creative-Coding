let mic;
let midi_out;
let mic_enabled = false
let seats;
let hand;
let pg;


function preload(){
  seats=loadModel('Sitze_comp.obj');
  hand=loadModel('hand.obj');
}

function setup() {
    let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mousePressed(userStartAudio);
  mic = new p5.AudioIn();
  mic.start();
  // ******************************************
  // ******************************************
  // ATTENTION IT CAN CREATE FEEDBACK!!!!!!
  // mic.connect();
  // ******************************************
  // ******************************************
  fft = new p5.FFT(0.8, 32);
  fft.setInput(mic);
  background(0);
  pg=createGraphics(windowWidth, windowHeight, WEBGL);
}

function draw() {
    imageMode(CENTER);
    pg.background(0,3);
  strokeWeight(1);

  micLevel = mic.getLevel();
  let y = height - micLevel * height * 40;
  //ellipse(width / 2, y, 10, 10);
  /*if(mic_enabled) {
    if (frameCount % 60 === 0) {
      let value = round(random(127))
      send_note(value, 100);
    }
    let value2 = sin(frameCount * 0.1) * 127 // sin values
    value2 = round(value2) // remove floating point values
    value2 = abs(value2) // remove negative values
    send_cc(value2, 0);
    send_cc(round(value2 / 3), 1);
  }*/

  //Anzeige Geräuschpegel
  let spectrum = fft.analyze();
  let value2 = spectrum[7]

  for(let i=0; i<20; i++){
    pg.push();
    pg.translate(windowWidth/2-i*90, windowHeight/2-value2*3);
    //rotateX(1.4);
    pg.rotateX(1.3);
    pg.rotateZ(frameCount/10+i*value2/100);
    pg.scale(map(value2,0,200,2,20));
    pg.noStroke();
    pg.ambientLight(60, 60, 0);
    pg.pointLight(255, 255, 255, 10, 10, 100);
    pg.fill(240,0,0)
    pg.model(hand);
    image(pg,0,0);
    pg.pop();
}


  /*noStroke();
  fill('#3ff')
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h)
  }

  beginShape()
  

  //Geräuschlinie
  noFill()
  stroke('#33f')
  strokeWeight(2)
  for (let i = 0; i < waves.length; i++) {
    let x = map(i, 0, waves.length, 0, width);
    let y = map(waves[i], -1, 1, 0, height)
    vertex(x, y)
  }
  endShape()*/
  console.log(value2);
}

function send_cc(value, cc) {
  const val = parseInt(abs(value)) % 128
  midi_out.sendControlChange(cc, value);
  // console.log(`send midi cc: ${val}`);
}
function send_note(note, duration) {
  midi_out.playNote(note, { duration });
  // console.log(`send midi note: ${note}`);
}