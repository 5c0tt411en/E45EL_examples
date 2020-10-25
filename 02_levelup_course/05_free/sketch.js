let n = 30;
let col = ['#E91B86', '#FFCC7C', '#A0CF31', '#92C8E8', '#FFFFFF'];

function setup() {
    createCanvas(400, 400);
    noFill();
    strokeCap(SQUARE);
}
 
function draw() {
    background(col[4]);
    for (let i = 1; i <= n; i++) { 
        strokeWeight(random(10, 15));
        stroke(col[int(random(4))]);
        arc(width / 2, height / 2, width * i / n, height * i / n, random(TWO_PI), random(TWO_PI) );
    }
    noLoop();
}