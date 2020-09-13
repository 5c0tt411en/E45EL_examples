let n = 360;
let rate = 1;
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
    noFill();
}

function draw() {
	background(cycle);
    for (let i = 0; i < n; i+=3) {
        stroke(cycle * i / n, cycle, cycle, cycle);
        fromX = width / 2;
        fromY = height / 2;
        armFromX = fromX + cos(radians(i - 90)) * width / 3;
        armFromY = fromY + sin(radians(i - 90)) * height / 3;
        toX = fromX + cos(radians(i + 120)) * width / 2;
        toY = fromY + sin(radians(i + 120)) * height / 2;
        armToX = toX + cos(radians(i + 210)) * width / 2;
        armToY = toY + sin(radians(i + 210)) * height / 2;
        bezier(fromX, fromY, armFromX, armFromY, armToX, armToY, toX, toY);
    }
	noLoop();
}