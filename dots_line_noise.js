
var x0 = 0;
var y0 = 0;

var x1 = 0;
var y1 = 0;

var div = 40;
var margin = 5;

var bkgnd_color;
var strk_color;
var curve_color;
var strk_w = 3;

var separation = 0;

var xoff = 0;
var yoff = 0;
var n = 0;

var noise_w = 7;
var inc = 1;

function setup() {
	createCanvas(500, 500);
	bkgnd_color = color("#4A6274");
	//bkgnd_color = color("#FAFAFA");
	curve_color = color("#E2725A");
	strk_color = color("#79AEB2");
	//strk_color = color("#101010");
	
	background(bkgnd_color);
	
	separation = width / div;

	stroke(strk_color);
	strokeWeight(strk_w);
	strokeCap(PROJECT);

}

function draw() {
	background(bkgnd_color);

	

	for (let i = margin; i <= div-margin; i++) {
		x0 = separation * margin;
		y0 = separation * i;
		//xoff = 0;
		noFill()
		beginShape()
		let k = 0;
		for (let j = margin; j <= div-margin; j++) {      
			x1 = separation * j;
			y1 = separation * i;
			
			
			
			n = map(noise(xoff), 0,1,-1,1) * separation  * (k**1.3/div)*noise_w;
			

			y1 = y1+n;

			// stroke(255);
			// strokeWeight(5);
			// point(x1,y1);
			
			strokeWeight(strk_w)
			// stroke(strk_color);
			// if (j>margin){
			// 	line(x1,y1,x0,y0);
			// }

			stroke(curve_color)
			curveVertex(x1, y1)

			


			x0 = x1;
			y0 = y1;

			xoff += inc;
			if (j <= (div/2)){
				k = k+1;	
			}
			else{
				k = k-1;
			}
		}
		//yoff += inc;
		endShape()
	}
	noLoop();
}
