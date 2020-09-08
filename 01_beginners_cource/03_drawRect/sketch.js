let img;
let rateX;
let rateY;
let count = 7;

function preload() {
    img = loadImage('data/face-1568256.jpg');
}

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(0);
	
	rateX = img.width / width;
	rateY = img.height / height;

	squareRecusion(10, 10, width * rateX - 20, count);
	noLoop();
}

function squareRecusion(x, y, size, n) {
	fill(0);
	stroke(255);
    square(x / rateX, y / rateY, size / rateX);
	noStroke();
	fill(255);
	let colorSize = (size / rateX) * (red(img.get(x, y)) / 255);
	ellipse(x / rateX + size / (rateX * 2), y / rateY + size / (rateX * 2), colorSize, colorSize);
    n--;
    if (n >= 0) {
        let hs = size/2;

        //Probability
        let p = map(n, 0, count-1, 0.5, 0);

        if (random(1) > p) {
            squareRecusion(x, y, hs, n);
            squareRecusion(x+hs, y, hs, n);
            squareRecusion(x+hs, y+hs, hs, n);
            squareRecusion(x, y+hs, hs, n);
        }
    }
}