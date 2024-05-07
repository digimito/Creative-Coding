function setup() {
    createCanvas(400, 400);
  
  }
  
  function draw() {
    background(200);
  
    // Style the text.
    textAlign(CENTER);
    textSize(16);
  
    // Display the mouse's coordinates.
    text(`x: ${mouseX} y: ${mouseY}`, 50, 50);
  }