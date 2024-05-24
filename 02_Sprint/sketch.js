var vorsp=['Mushroom Pie', 'Lyonaise Potatoes', 'Escaloped Eggs', 'Celery Salad','Tomato on Toast'];
var vorspDes=['Line a baking dish with rich crust. Drain the liquor from a can of small mushrooms, slice the mushrooms, add one cupful of cream, or rich milk, and tablespoonful of butter, to juice of mushrooms. Season to taste and thicken with tablespoonful of flour blended with butter; add the mushrooms, fill in the baking dish, cover with top crust and bake a rich brown. Brown sauce may be used if preferred.',
'To one tablespoonful of finely chopped onion, add seasoning to taste; place in frying pan with two tablespoonfuls of butter and let fry a light brown, being careful not to burn. Have ready one quart of cold boiled potato cut in small dice, add and turn delicately with fork until potatoes have absorbed the butter; just before removing from fire add one tablespoonful of chopped parsley. Serve very hot.',
'Boil six eggs fifteen minutes, the water should simmer, rather than boil; then slip the eggs into cold water for a moment, to make them peel easily, remove the shells and set aside to cool. Make a white sauce of rich milk thickened with butter and flour, seasoned to taste. Remove the whites of eggs and chop; cream the yolks with one half cupful of cream and add to white sauce. Stir in the chopped up whites, and add a teaspoonful of chopped parsley; place in baking dish, sprinkle bread crumbs and bits of butter over the top and set in hot oven just long enough to brown delicately.',
'Wash and finely cut the celery, and cover with mayonaise creamed dressing Serve with slices of lemon.',
'Use stale bread, cut in reasonably thick slices; dip in sweet milk, then in beaten egg, seasoned with salt and pepper; fry in butter till a nice brown. Have ready a quart of tomatoes that have stewed gently until reduced one fourth; season to taste; add one tablespoonful of butter and pour over fried toast. Just before serving place a poached egg on each slice.'];

var hauptsp=['Beet Salad','Banana Fritters','Rice Croquettes','Bean Purée with Nouilles','Tomato Bouillon']
var hauptspDes=['Boil small sized beets till tender in salted water; remove the skin, scoop out the center--leaving the sides one quarter of an inch thick; pour over them a French dressing to which has been added a few drops of onion juice; stand aside for an hour. Chop up four stalks of crisp celery and one cucumber; add one tablespoonful of chopped parsley, one half teaspoonful of onion juice and the chopped pieces of the beet taken from the centers; mix all together, drain the beets, and fill with the mixture; arrange on water cress, pour over it a French dressing.',
'Slice bananas one half inch thick; squeeze over the slices some orange juice; stand for fifteen minutes; drain each piece, dip in fritter batter and fry.',
'One cupful of rice, boiled in one pint of milk and one of water until tender. While boiling, add butter the size of an egg, two teaspoonfuls of sugar, three eggs, and the juice and grated peel of one lemon. Mix well, make into rolls a finger long, and dip first into yolks of two eggs, well beaten, then into cracker crumbs, and fry in hot cocoanut butter.',
'Take one pint of cold Boston baked beans; place in kettle with two quarts of water, one small onion, chopped fine, one small bay leaf; let boil until onion is tender, put through a wire strainer (if too thick, more water can be added); season to taste, add nouilles and let simmer until they are tender.',
'Put one quart of tomatoes, with one and a half quarts of water, in kettle over the fire; add one tablespoonful of chopped onion, two bay leaves, four whole cloves, one level teaspoonful of celery seed and a half teaspoonful of pepper. Cover and cook twenty minutes. Strain through a sieve. Beat the whites of two eggs until partly light, add them to the tomato, and boil rapidly for five minutes. Strain through two thicknesses of cheese cloth. Reheat, season with two teaspoonfuls of salt and serve with croutons.']

var dessert=['Stuffed Dates','Molasses Candy','Wachtmeister Pudding','Irish Moss Jelly','Jumbles']
var dessertDes=['Wash and carefully dry the dates by placing them in a colander and letting stand in warm place; remove the stones and insert half a pecan, or one fourth of an English walnut; roll in confectioner’s sugar.',
'Two cupfuls of molasses, one cupful of sugar, one teaspoonful of vinegar, one tablespoonful of butter. Boil until it is brittle when tried in cold water. Pour in a buttered tin; when cool pull until white.',
'Fill a mould with alternate layers of sponge cake and jam,--strawberry or apricot, are preferable,--then saturate with rich cream flavored with vanilla and sweetened. Freeze in moulds. Custard may be used in place of cream.',
'Pick over and wash carefully one half cupful of Irish Moss. Put it into one pint of boiling water, add the thin yellow rind cut from one lemon, and one cupful of sugar; simmer until the moss is dissolved, add the juice of lemon and a grating of nutmeg, and strain into a cold, wet, mould. Set away to harden; serve plain, or with cream. Orange may be used in place of lemon, though a dessert spoonful of lemon juice used with the orange improves the flavor. This Irish Moss may be substituted in place of gelatine in all delicate puddings calling for that animal product; it is to be had at any druggist’s.',
'Two eggs, six tablespoonfuls of butter, six tablespoonfuls of sugar, one teaspoonful of lemon extract, a pinch of soda sifted in flour enough to make a dough stiff enough to roll. Roll very thin, cut and bake in quick oven.']

var index=0;
let listeAnzahl=['100g', '1TL', '2kg', '500g', '225ml'];
let rand;
let rand2;
let rand3;
let sketchrunning=1;
let button;

function setup() {
  createCanvas(windowWidth,windowHeight);
  let button=createButton('choose a menu');
  let button2=createButton('try again')
  button.position(20,450);
  button2.position(20,480);
  button.mousePressed(stoprunning);
  button2.mousePressed(stoprunning);
}

function draw() {
  rand=floor(random(5));
  rand2=floor(random(5));
  rand3=floor(random(5));
  frameRate(10);
  background(220);
  textSize(12);
  textFont('monospace');
  textAlign(CENTER);
  text("Liebe geht durch den Magen, hier ein Menüvorschlag:" + "\n" ,20,15,windowWidth,windowHeight);

  text(hauptsp[rand] + "\n" + " " + "\n"+ hauptspDes[rand] + "\n" + " "+ "\n"+ vorsp[rand2]+ "\n" + " " + "\n"+ vorspDes[rand2]+ "\n" + " "+ "\n" + dessert[rand3]+ "\n" + " " + "\n"+ dessertDes[rand3],windowWidth/2-200,80,400,windowHeight);
  
  /*let piece=match(listeAnzahl[rand], /\b\w{2,}\b/g);
  text(piece,windowWidth/2-200,500,400,windowHeight);*/

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

   

  /*function keyPressed(){

    if(key==='s'){
    
      if(sketchrunning==1){
        noLoop();
        sketchrunning=0;
      }else if(sketchrunning==0){
        loop();
        sketchrunning=1;
      }
    }*/ 
    
  

  if(key==='e'){
    saveGif('sprint02_',15)
  }

