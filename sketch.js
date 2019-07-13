/* I can load in a large image than the canvas size and there will be no distortion as long as it is the same ratio when resized*/


let equStar;
let frbdata;
let plx;
let ply;

function preload() {
  //  equStar = loadImage('constellations_map_1028_514.png');
  equStar = loadImage('constellations_map_b.png');
  frbdata = loadJSON('frb3.json');

}

function setup() {
  createCanvas(1028, 514);
  background(equStar);
  console.log(frbdata.frbs.length);
  console.log(frbdata.frbs[0].frb_name);
  console.log(frbdata.frbs[0].rop_raj);
  let ra = 101.2870833;
  let dec = -16.7161111;
  plx = map(ra, 360, 0, 0, width);
  ply = map(dec, -90, 90, height, 0);
  noFill();
  ellipse(plx, ply, 20, 20);
  let frbd = frbdata.frbs;
  for (let i = 0; i < frbd.length; i++) {
    let ra = frbd[i].rop_raj;
    let dec = frbd[i].rop_decj;
    plx = map(ra, 360, 0, 0, width);
    ply = map(dec, -90, 90, height, 0);
    stroke(255,0,0);
    strokeWeight(3);
    noFill();
    ellipse(plx, ply, 20, 20);

  }


}

//function draw() {
//  background(220);
//}



/*
 
I changed the ra and dec format with python

this should be sirius
RA = 06h 45m 08.9s, Dec = -16° 42' 58"
101.2870833    -16.7161111
*/