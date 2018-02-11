background(0);

var x = 15;

for (var x = 15; x <= width; x = x+30){
  for(var y = 15; y <= height; y +=30){
  ellipse(x,y,20,20);
  }
}
