let gradientStep;
let n = 10;
let x, y;

function setup() {
    createCanvas(400, 400);
    noFill();
    strokeWeight(5);
}
 
function draw() {
    background(255);
    for (let j = 0; j < n; j++) { 
        let from = color(252, 249, 122);
        let to = color(65, 141, 255, 100);
        x = random(width);
        y = random(height);
        gradientStep = random(30, 250);
        for (let i = 10; i < gradientStep; i+=20) { 
            stroke(lerpColor(from, to,   i / gradientStep));
            circle(x, y, i);
        }
    }
    noLoop();
}