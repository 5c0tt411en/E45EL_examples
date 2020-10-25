let zoff = 0;
let angle = 0;
let animate = true;
let margin = 150;

function setup() {
    createCanvas(400, 400);
    strokeWeight(10);
}

function draw() {
    let animationSpeed = 0.001;
	let radius = 200;
  
    background(255);
    let from = color(239, 107, 34);
    let to = color(248, 240, 57);
    noFill();

    for (i = -margin; i <= width + margin; i += 20) {
        beginShape();
        for (j = -margin; j <= height + margin; j += 20) {
        stroke(lerpColor(from, to, i / width));
        let x =i;
        let y =j;
        let scale = 0.003;
        n = map(noise(i * scale, j * scale, zoff), 0, 1, -1, 1);
        x = i +  n*radius * sin(angle);
        y = j +  n*radius * cos(angle);
        curveVertex(x, y);
        }
        endShape();
    }
    zoff += 0.005;
    angle += animationSpeed;
}