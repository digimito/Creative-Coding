let result;
let sketchrunning=1;
let button;
let piece;
let promptText;
var listeAnzahl=['100g', '1tsp', '2kg', '500g', '225ml', '0,5l','a pack', 'a pinch'];
var listeZutaten=['milk','mushrooms', 'butter', 'lemon juice', 'tomatoes', 'spinach','eggs', 'beans'];
var listeAdjektiv=['soft', 'raw','white','thin','thick','rich','hot','slightly old'];
var listeVerb=['chop very fine', 'pour in', 'boil', 'blend','fill with', 'put in a kettle over the oven', 'bake','roll out'];
var lsiteVerb2=['boil', 'bake','fry','stew in broth','let cool down']
var listeWürze=['salt', 'pepper','onions', 'garlic','cheese','chilli','coriander', 'spring onions'];
var listeZustand=['crispy', 'creamy','tender', 'a good smell emerges', 'bubbles start to form','you get tired','it gets hot','done']
var listeZusatz=['immediatly', 'with an alcoholic beverage of your choice', 'with a tall glass of milk', 'a big portion', 'with a soda', 'on wafers','with a nice salad','as cold as possible']

function preload() {
  result = loadStrings('cookbook.txt');
}

function setup() {
  background(255);
  textAlign(CENTER);
  createCanvas(windowWidth,windowHeight*2);
  fill(200,100,50);
  let button=createButton('choose a menu');
  let button1=createButton('choose a recipe');
  button.position(windowWidth/2-button.width/2,windowHeight-80);
  button1.position(windowWidth/2-button1.width/2,windowHeight*2-120);
  button.mousePressed(stoprunning);
  button1.mousePressed(stoprunning);

  let button2 = createButton('generate picture');
  button2.position(windowWidth/2 - button2.width/2, windowHeight*2-80);
  button2.mousePressed(openAIGenerator);
}

function draw() {
  rand=floor(random(8));
  rand1=floor(random(8));
  rand2=floor(random(8));
  rand3=floor(random(8));
  rand4=floor(random(5));
  let resultA=join(result);
  piece=match(resultA, /\w[A-Z]\w{1,}/g);
  piece2=match(resultA, /\w[a-z]\w{2,}/g);
  frameRate(15);
  background(210,230,150);
  noStroke();
  rect(20,0, windowWidth/6, windowHeight*2)
  rect(windowWidth-windowWidth/6-20,0, windowWidth/6, windowHeight*2)
  textFont('monospace');
  textStyle(BOLD);
  textSize(30);
  text("YOUR MENU SUGGESTION:" + "\n" + "\n" ,20,55,windowWidth,windowHeight);
  textStyle(NORMAL);
  textSize(20);
  text(random(piece)+ ' ' + random(piece) + "\n" + ' ' + "\n" + 
  
  random(piece)+ ' ' + random(piece)+ "\n" + ' '+ "\n" +
  
  random(piece) + ' WITH ' + random(piece)+ "\n" + ' '+ "\n"+

  random(piece)+ ' ' + random(piece)+ "\n" + ' '+ "\n" +
  
  random(piece)+ ' ' + random(piece) + ' AND ' + random(piece) + "\n" + ' ' + "\n",windowWidth/2-200,windowHeight/3,400,windowHeight);
  textStyle(BOLD);
  textSize(30);
  text("WANT TO COOK IT YOURSELF?" + "\n" + "\n" ,20,windowHeight+55,windowWidth,windowHeight);
  textStyle(NORMAL);
  textSize(20);
  promptText = random(piece)+ ' ' + random(piece);
  //Anzahl+ of+ Zutat+ and+ Anzahl+ of+ Adjektiv+ Zutat+ Verb+ the+ Zutaten.+ verb+ with+ Menge+ Zutaten/Gewürz+ until+ adjektiv+. verb+ for+ Zeit+ and+ serve+ Zustand.
    text(promptText + "\n" + ' ' + "\n" + 
    'Take '+listeAnzahl[rand]+' of '+ listeZutaten[rand] + ' and add '+ listeAnzahl[rand2]+' of '+ listeAdjektiv[rand] +' '+ listeZutaten[rand2]+', mix them very well in a big bowl, '+listeVerb[rand]+ ' some ' + listeZutaten[rand3] + ' and '+ listeAnzahl[rand3] +' of '+ listeWürze[rand]+ '. Take the mixture and '+lsiteVerb2[rand4] +' until ' + listeZustand[rand] +'. Now serve and enjoy ' + listeZusatz[rand]+ '!' +"\n" + ' '+ "\n", windowWidth/2-200,windowHeight*1.3,400,windowHeight);
}

function stoprunning(){
  if(sketchrunning==1){
    noLoop();
    sketchrunning=0;
  }else if(sketchrunning==0){
    loop();
    sketchrunning=1;
  }
}  

function openAIGenerator() {
  let encodedPrompt = encodeURIComponent(promptText);
  let generatorUrl = `https://www.craiyon.com/?prompt=${encodedPrompt}`;
  window.open(generatorUrl, '_blank');
}
