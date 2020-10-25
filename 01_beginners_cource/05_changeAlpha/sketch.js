let n = 20;
let alpha = 30;
let move = 200;

function setup() {
    createCanvas(400, 400);
    blendMode(ADD);
    noStroke();
}

function draw() {
    let r = width / 2;
    background(0);
    fill(5, 98, 135, alpha);
    circles(width / 2 + move, width / 2, r, r, n, -1, 0);
    fill(66, 185, 206, alpha);
    circles(width / 2, width / 2 - move, r, r, n, 0, 1);
    fill(250, 130, 106, alpha);
    circles(width / 2 - move, width / 2, r, r, n, 1, 0);
    fill(240, 88, 69, alpha);
    circles(width / 2, width / 2 + move, r, r, n, 0, -1);
	noLoop();
}

function circles(x, y, rX, rY, n, xR, yR) {
    let rate = 0.15;
    let offset = (rX * abs(xR) + rY * abs(yR)) * rate;
    let nextR = (rX * abs(xR) + rY * abs(yR)) * (1 - rate);

    ellipse(x, y, rX * 2, rY * 2);

    if (n > 0) {
        circles(x + xR * offset, y + yR * offset, nextR + abs(yR) * 10, nextR + abs(xR) * 10, n - 1, xR, yR);
    }
}