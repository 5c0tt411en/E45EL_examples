let n = 4;
let rand = 10;
let nc = 100;
let col = ['#FE4365', '#FC9D9A', '#F9CDAD', '#C8C8A9', '#FFFFFF']

function setup() {
    createCanvas(400, 400);
    noFill();
}

function draw() {
    background(col[4]);
    for (let i = 0; i < 360; i += 360 / nc) {
        stroke(col[int(random(4))]);
        let x = (1 + cos(radians(i))) * width / 2;
        let y = (1 + sin(radians(i))) * height / 2;
        lines(x, y, i, rand, n);
    }
	noLoop();
}

function lines(x, y, deg, rand, num) {
    let rad = radians(deg + random(-rand, rand));
    let toX = width / 2 * (1 + (num - 1) * cos(rad) / n);
    let toY = height / 2 * (1 + (num - 1) * sin(rad) / n);
    strokeWeight(3);
    line(x, y, toX, toY);
    strokeWeight(8);
    point(x, y);

    if (num > 2) {
        lines(toX, toY, deg, rand, num - 1);
    }
}