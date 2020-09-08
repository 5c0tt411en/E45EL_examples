let n = 2000;
let rate = 1.6;
let cycle = 360;
let toY;
let offset = 50;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, cycle);
    noFill();
}

function draw() {
	background(cycle);
    for (let i = 0; i < n; i++) {
        stroke(i * cycle / (n * rate), 360, 360, 50);
        // line(0, i * height / n, width, random(height));
        toY = random(height - offset * 2) + offset;
        bezier(offset, i * (height - offset * 2) / n + offset,
            offset + random(-width / 4, width / 4), i * (height - offset * 2) / n + offset + random(-height / 4, height / 4),
            width - offset + random(-width / 4, width / 4), toY + random(-height / 4, height / 4),
            width - offset, toY);
    }
	noLoop();
}