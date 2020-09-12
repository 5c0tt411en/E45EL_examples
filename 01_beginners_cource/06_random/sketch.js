let n = 10;
let rand = 5;

function setup() {
    createCanvas(400, 400);
    blendMode(ADD);
    noFill();
}

function draw() {
    background(0);
    for (let i = 0; i < 360; i += 3) {
        stroke(random(100, 200), random(100, 200), random(100, 200), random(100, 200));
        let x = (1 + cos(radians(i))) * width / 2;
        let y = (1 + sin(radians(i))) * height / 2;
        lines(x, y, i, rand, n);
    }
	noLoop();
}

function lines(x, y, deg, rand, n) {
    let rad = radians(deg + random(-rand, rand));
    let toX = width / 2 + n * 20 * cos(rad);
    let toY = height / 2 + n * 20 * sin(rad);
    strokeWeight(1);
    line(x, y, toX, toY);
    strokeWeight(2);
    point(x, y);

    if (n > 1) {
        lines(toX, toY, deg, rand, n - 1);
    }
}