let n = 100;
let col = ['#2d3339', '#412824', '#512c18', '#b52c25', '#e9e9cf'];

function setup() {
    createCanvas(400, 400);
    noFill();
    strokeCap(SQUARE);
}
 
function draw() {
    background(col[4]);
    for (let i = 1; i <= n; i++) { 
        strokeWeight(random(5));
        stroke(col[int(random(4))]);
        arc(width / 2, height / 2, width * i / n, height * i / n, random(TWO_PI), random(TWO_PI) );
    }
    noLoop();
}