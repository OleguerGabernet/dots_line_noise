
var x = 0;
var y = 0;

var div = 10;

var bkgnd_color = 0;
var strk_color = 255;

function setup() {
  createCanvas(400, 400);
  background(bkgnd_color);
  
  var separation = width / div;

}

function draw() {
  background(bkgnd_color);

  stroke(strk_color);
  strokeWeight(3);

  for (let i = 0; i < div; i++) {
    point(width/2,height/2);
    
  }
  

}
