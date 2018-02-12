function setup() {
  createCanvas(400, 400);
  background(255);
  colorMode(HSB);
  noStroke();
}

 var diameter = 10;

function draw(){
  if(keyIsPressed){ 
 if (key == "B") {
   ellipse(mouseX, mouseY, diameter);
   fill(255,100,100);
 }else if(key == "Y"){
 ellipse(mouseX, mouseY, diameter);
 fill(60,100,100);
 }else if(key == "E");
    ellipse(mouseX, mouseY, 30);
    fill(0,0,100);
 }
}
