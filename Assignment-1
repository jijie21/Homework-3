 function jackiePatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 200, 200);
  
  // blocky J
  fill(238);
  noStroke();
  rect(x+20, y+20, 50, 20);
  rect(x+20, y+60, 50, 20);
  rect(x+20, y+100, 50, 20);
  rect(x, y+20, 20, 100);
  
  // overlay of lines
  stroke(0);
  var lines = 3;
  while (lines < 100) {
    line(x+lines, y, x, y+lines);
    lines = lines + 5;
  }
  stroke(200);
  while (lines < 100) {
    line(x+lines, y, x, y+lines);
    lines = lines + 3;
  }
  stroke(255, 0, 0);
  lines = 0;
  while (lines < 200) {
    line(x+200, y+lines, x+lines, y+200);
    lines = lines + 5;
  }
  stroke(0, 64, 127);
  while (lines < 100) {
    line(x+100, y+lines, x+lines, y+100);
    lines = lines + 4;
  }
}
background(255);
jackiePatch(0, 0); 
