let n = 5;
let offset = 50;

function setup() {
    createCanvas(400, 400);
    blendMode(ADD);
    noStroke();
}

function draw() {
    background(0);
    fill(50, 50, 255, 20);
    circles(width / 2, width / 2, width / 2, width / 2, 7, -1, 0);
    // circles(width / 2, width / 2, width / 2, width / 2, 7, 0, 1);
    fill(255, 50, 50, 20);
    // circles(width / 2, width / 2, width / 2, width / 2, 7, 1, 0);
    circles(width / 2, width / 2, width / 2, width / 2, 7, 0, -1);
	noLoop();
}

function circles(x, y, rX, rY, n, xR, yR) {
    let rate = 0.1;
    let offset = (rX * abs(xR) + rY * abs(yR)) * rate;
    let nextR = (rX * abs(xR) + rY * abs(yR)) * (1 - rate);

    ellipse(x, y, rX * 2, rY * 2);

    if (n > 0) {
        circles(x + xR * offset, y + yR * offset, nextR + abs(yR) * 10, nextR + abs(xR) * 10, n - 1, xR, yR);
    }
}