let n = 400;
let x = [], y = [], dir = [], c = [], sw = [];
let noiseScale;
let counter = 0;
let col = ['#93DD7B', '#48A682', '#FBF847'];

function setup() {
    createCanvas(400, 400);
    background(255);
    for (let i = 0; i < n; i++) {
        x[i] = random(2 * width) - width / 2;
        y[i] = random(2 * height) - height / 2;
        noiseScale = random(500, 1000);
        c[i] = col[int(random(3))];
        sw[i] = int(random(1, 6))
    }
}

function draw() {
    counter++;
    if (counter >= 400) { 
        counter = 0;
        for (let i = 0; i < n; i++) {
            x[i] = random(2 * width) - width / 2;
            y[i] = random(2 * height) - height / 2;
            noiseScale = random(500, 1000);
            noiseScale = random(500, 1000);
        }
        background(255);
    }
    for (let i = 0; i < n; i++) {
        dir[i] = noise(x[i] / noiseScale, y[i] / noiseScale) * TWO_PI;
        x[i] += cos(dir[i]);
        y[i] += sin(dir[i]);
        strokeWeight(sw[i]);
        stroke(c[i]);
        point(x[i], y[i]);
    }
}