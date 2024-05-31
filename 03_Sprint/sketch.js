let mic;
let midi_out;
let mic_enabled = false
let seats;
let hand;
angleMode(DEGREES);

function preload(){
  seats=loadModel('Sitze_comp.obj');
  hand=loadModel('hand.obj');
}

function setup() {
  background(0,0,0,240);
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.mousePressed(userStartAudio);
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(0.8, 16);
  fft.setInput(mic)
}

function draw() {
  strokeWeight(1);
  textFont('monospace');
  textStyle(BOLD);
  textSize(30);
  text('tap to start', 10, 20);
  micLevel = mic.getLevel();
  let y = height - micLevel * height * 20;
  //ellipse(width / 2, y, 10, 10);

  //Anzeige Geräuschpegel
  let spectrum = fft.analyze();
  let value2 = spectrum[10]

  for(let i=0; i<20; i++){
    for(let j=0; j<20; j++){
    push();
    translate(i*90-windowWidth/2, j*90-windowWidth/2);
    rotateX(frameCount/10+i*0.5);
    scale(map(value2,0,150,5,30));
    noStroke();
    normalMaterial();
    model(hand);
    pop();
  }
}
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


