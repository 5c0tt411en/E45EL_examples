let gradientStep;
let n = 100;
let x, y;

function setup() {
    createCanvas(400, 400);
    noFill();
    strokeWeight(2);
}
 
function draw() {
    background(0);
    for (let j = 0; j < n; j++) { 
        let from = color(random(100, 244), random(120, 225), random(120, 225));
        let to = color(random(20, 150), 40, random(100, 200));
        x = random(width);
        y = random(height);
        gradientStep = random(10, 80);
        for (let i = 0; i < gradientStep; i++) { 
            stroke(lerpColor(from, to,  i / gradientStep));
            circle(x, y, i);
        }
    }
    noLoop();
}