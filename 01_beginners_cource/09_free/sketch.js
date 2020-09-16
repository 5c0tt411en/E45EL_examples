let n = 500;
let col = ['#124560', '#328081', '#4dc7de', '#f9f2dc', '#f8582e']

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    noStroke();
}
 
function draw() {
    background(0);
    for (let i = 0; i < n; i++) {
        fill(col[int(random(5))]);
        let x = random(width);
        let y = random(height);
        let w = random(5);
        let h = random(height);
        rect(x, y, w, h);
        circle(x, y - h / 2, w * 3);
     }
    noLoop();
}