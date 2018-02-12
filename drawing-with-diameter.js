function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter,diameter);
  }else if(key =="1"){
    ellipse(mouseX,mouseY,20, 20);
  }else if(key =="2"){
  ellipse(mouseX,mouseY,30, 30);}
  else if(key =="3"){
    ellipse(mouseX,mouseY,40, 40);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(255, 0, 0);
  } else if (key == 'G') {
    fill(0, 255, 0);
  } else if (key == 'B') {
    fill(0, 0, 255); 
  }else if (key == "Y"){
  fill(255,255,0)
  }else if (key == "O"){
  fill(255,128,0)
  }else if (key == "P"){
  fill(160,32,240)
  }
}
