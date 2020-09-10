let n = 2000;
let rate = 1.6;
let cycle = 360;
let armFromX;
let armFromY;
let armToX;
let armToY;
let toX;
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
        stroke(i * cycle / (n * rate), 360, 360, 30);
        // line(0, i * height / n, width, random(height));
        armFromX = random(-width / 4, width / 4);
        armFromY = random(-height / 4, height / 4);
        armToX = random(-width / 4, width / 4);
        armToY = random(-height / 4, height / 4);
        toX = width - offset;
        toY = random(height - offset * 2) + offset;
        bezier(offset, i * (height - offset * 2) / n + offset,
            offset + armFromX, i * (height - offset * 2) / n + offset + armFromY,
            toX + armToX, toY + armToY,
            toX, toY);
    }
	noLoop();
}