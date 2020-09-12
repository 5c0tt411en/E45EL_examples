let n = 5000;
let x = [], y = [], dir = [];
let noiseScale;
let counter = 0;

function setup() {
    createCanvas(400, 400);
    background(0);
    for (let i = 0; i < n; i++) {
        x[i] = random(-width / 2, width / 2) + width / 2;
        y[i] = random(-height / 2, height / 2) + height / 2;
        noiseScale = random(500);
    }
}

function draw() {
    counter++;
    if (counter >= 200) { 
        counter = 0;
        for (let i = 0; i < n; i++) {
            x[i] = random(-width / 2, width / 2) + width / 2;
            y[i] = random(-height / 2, height / 2) + height / 2;
            noiseScale = random(500);
        }
        background(0);
    }
    for (let i = 0; i < n; i++) {
        dir[i] = noise(x[i] / noiseScale, y[i] / noiseScale) * TWO_PI;
        x[i] += cos(dir[i]);
        y[i] += sin(dir[i]);
        stroke(100, 250, 200, 30);
        point(x[i], y[i]);
    }
}