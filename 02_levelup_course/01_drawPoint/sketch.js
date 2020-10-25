let n = 45;
let x, y;
let mode = 0;
let rate = 0;

function setup() {
    createCanvas(400, 400);
    stroke(61, 209, 235, 40);
}
 
function draw() {
    let t = frameCount / 100;
    background(248, 244, 242);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) { 
            strokeWeight(40 * noise(i + t * 2, j + t * 2));
            let x = width / 2 * (1 + cos(TWO_PI * i / n) * cos(TWO_PI * j / n));
            let y = height / 2 * (1 + sin(TWO_PI * i / n));
            point(x, y);
        }
    }
}