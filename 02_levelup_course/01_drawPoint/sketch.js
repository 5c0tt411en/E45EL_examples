let n = 50;
let x, y;
let mode = 0;
let rate = 0;

function setup() {
    createCanvas(400, 400);
    stroke(120, 220, 80, 50);
}
 
function draw() {
    let t = frameCount / 100;
    blendMode(BLEND);
    background(0);
    blendMode(ADD);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) { 
            strokeWeight(20 * noise(i + t * 2, j + t * 2));
            let x = width / 2 + 150 * cos(TWO_PI * i / n) * cos(TWO_PI * j / n);
            let y = height / 2 + 150 * sin(TWO_PI * i / n);
            point(x, y);
        }
    }
}