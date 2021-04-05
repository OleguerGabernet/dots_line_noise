
var x0 = 0;
var y0 = 0;

var x1 = 0;
var y1 = 0;

var div = 20;

var bkgnd_color;
var strk_color;
var strk_w = 2;

var separation = 0;

var xoff = 0;
var yoff = 0;
var n = 0;

var noise_w = 3;

var inc = 0.5;

function setup() {
	createCanvas(500, 500);
	bkgnd_color = color("#4A6274");
	//bkgnd_color = color("#FAFAFA");
	strk_color = color("#E2725A");
	//strk_color = color("#79AEB2");
	//strk_color = color("#101010");
	
	background(bkgnd_color);
	
	separation = width / div;

	stroke(strk_color);
	strokeWeight(strk_w);

}

function draw() {
	background(bkgnd_color);

	

	for (let i = 2; i <= div-2; i++) {
		x0 = separation * 2;
		y0 = separation * i;
		//xoff = 0;
		for (let j = 2; j <= div-2; j++) {      
			x1 = separation * j;
			y1 = separation * i;
			
			n = map(noise(xoff), 0,1,-1,1) * separation * noise_w * j/div * i/div;

			y1 = y1+n;

			//stroke(255);
			//strokeWeight(5);
			//point(x1,y1);
			
			//stroke(255,0,0);
			if (j>2){
				line(x1,y1,x0,y0);
			}


			x0 = x1;
			y0 = y1;

			xoff += inc;	
		}
		//yoff += inc;
	}
	noLoop();
}
