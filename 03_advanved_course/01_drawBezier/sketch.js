let n = 180;
let cycle = 360;
let armFromX;
let armFromY;
let armToX;
let armToY;
let toX;
let toY;

function setup() {
    createCanvas(400, 400);
    colorMode(HSB, cycle);
    strokeWeight(3);
    noFill();
}

function draw() {
	background(cycle);
    for (let i = 0; i < n; i+=cycle / n) {
        stroke(cycle * i / n, cycle / 2, cycle, cycle);
        fromX = width / 2;
        fromY = height / 2;
        armFromX = fromX + cos(radians(i * cycle / n - 90)) * width / 3;
        armFromY = fromY + sin(radians(i * cycle / n - 90)) * height / 3;
        toX = fromX + cos(radians(i * cycle / n + 120)) * width / 2;
        toY = fromY + sin(radians(i * cycle / n + 120)) * height / 2;
        armToX = toX + cos(radians(i * cycle / n + 210)) * width / 2;
        armToY = toY + sin(radians(i * cycle / n + 210)) * height / 2;
        bezier(fromX, fromY, armFromX, armFromY, armToX, armToY, toX, toY);
    }
	noLoop();
}