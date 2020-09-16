let zoff = 0;
let angle = 0;
let animate = true;
let margin = 150;

function setup() {
    createCanvas(400, 400);
    background(255);
}

function draw() {

    let size = 200;
    let animationSpeed = 0.02;
	let radius = 200;
  
    background(0);
    let from = color(50, 100, 200);
    let to = color(100, 180, 120);
    noFill();

    for (i = -margin; i <= width + margin; i += 5) {
        beginShape();
        for (j = -margin; j <= height + margin; j += 20) {
        stroke(lerpColor(from, to, i / width));
        let x =i;
        let y =j;
        let scale = 0.005;//using a scale variable because steps between i and j counters are too large steps for noise function.
      
        // if (dist(i, j, width / 2, height / 2) < size) {
            n = map(noise(i * scale, j * scale, zoff), 0, 1, -1, 1);
            x = i +  n*radius * sin(angle);
            y = j +  n*radius * cos(angle);
        // }
        curveVertex(x, y);
        }
        endShape();
    }

    //Toggle animation with button.
    if (animate === true) {
        zoff += 0.01;
        angle += animationSpeed;
    }
}