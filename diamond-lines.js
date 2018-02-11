var y = 0;

for (var x= width/2; y < height/2; x = x - width/40, y= y+height/40){
line(x,y,width-x,y);
}

for (var x= 0; y <= height; x = x + width/40, y= y+height/40){
line(x,y,width-x,y);
}
