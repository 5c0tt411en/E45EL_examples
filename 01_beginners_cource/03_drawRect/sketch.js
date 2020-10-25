let img;
let rateX;
let rateY;
let count = 5;
let col = ['#C8D921', '#FFFFFF', '#F9F7F2']

function preload() {
    img = loadImage('data/face-1568256.jpg');
}

function setup() {
	createCanvas(400, 400);
	background(255);
}

function draw() {
	rateX = img.width / width;
	rateY = img.height / height;

	squareRecusion(10, 10, width * rateX - 20, count);
	noLoop();
}

function squareRecusion(x, y, size, n) {
	fill(col[0]);
	stroke(col[2]);
    rect(x / rateX, y / rateY, size / rateX, size / rateX);
	noStroke();
	fill(col[1]);
    let colorSize = (size / rateX) * (red(img.get(x, y)) / 255);
    rect(x / rateX + (size / rateX - colorSize) / 2, y / rateY + (size / rateX - colorSize) / 2, colorSize, colorSize);
    n--;
    if (n >= 0) {
        let hs = size / 2;

        let p = map(n, 0, count - 1, 0.15, 0);

        if (random(1) > p) {
            squareRecusion(x, y, hs, n);
            squareRecusion(x+hs, y, hs, n);
            squareRecusion(x+hs, y+hs, hs, n);
            squareRecusion(x, y+hs, hs, n);
        }
    }
}