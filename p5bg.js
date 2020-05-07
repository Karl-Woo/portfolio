let pallete = ["#142850", "#27496d", "#00909e", "#84a9ac", "#84a9ac"];
let sep = 3;
let rs;
var canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index',-2);
  canvas.style('display','block');
  canvas.style('position','fixed');
  colorMode(HSB, 360, 100, 100, 100);
	rs = random(10000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  randomSeed(rs);

  drawingContext.shadowColor = color(0, 0, 0);
  drawingContext.shadowBlur = 100;
  drawingContext.shadowOffsetY = 50;
  drawingContext.shadowOffsetX = 0;

  for (let y = -height/2; y < height; y += height / 5) {
    let c1 = random(pallete);
    let c2 = random(pallete);
    let c3 = random(pallete);
    while (c1 == c2 || c2 == c3 || c3 == c1) {
      c1 = random(pallete);
      c2 = random(pallete);
      c3 = random(pallete);
    }
    let gradient = drawingContext.createLinearGradient(0, 0, width, 0);

    gradient.addColorStop(0.0, c1);
    gradient.addColorStop(random(0.3,0.7), c2);
    gradient.addColorStop(1.0, c3);
    drawingContext.fillStyle = gradient;
    noStroke();
    beginShape();
    for (let x = -200; x <= width+200; x+=3) {
      let yy = y + map(noise(rs+y, x / 400, frameCount / 300), 0, 1, -height / sep, height / sep);
      vertex(x, yy);
    }
    vertex(width+200, height);
    vertex(0-200, height);
    endShape();
  }
}
