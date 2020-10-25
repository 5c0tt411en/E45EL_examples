let n = 100;
let col = ['#FF0084', '#FF872F', '#85E9BE', '#28A9FF', '#f8582e']

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    noStroke();
}
 
function draw() {
    background(255);
    for (let i = 0; i < n; i++) {
        fill(col[int(random(5))]);
        let x = random(width);
        let y = random(height);
        let w = random(6);
        let h = random(height);
        rect(x, y, w, h);
        circle(x, y + h / 2, w * 4);
     }
    noLoop();
}