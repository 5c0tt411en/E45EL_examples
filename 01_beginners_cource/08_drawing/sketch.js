let n = 3;
let col = ['#8849FF', '#22269E', '#5E9CFE', '#FFFFFF']

function setup() {
    createCanvas(400, 400);
    background(col[3]);
    strokeWeight(1);
}
 
function draw() {
}

function mouseDragged() {
    counter = 0;
    let d = 30 * noise(millis() / 500);
    for (let i = 0; i < n; i++) {
        fill(col[i]);
        stroke(col[3]);
        let x = mouseX + d * cos(radians(millis() / 2 + i * 360 / n));
        let y = mouseY + d * sin(radians(millis() / 2 + i * 360 / n));
        circle(x, y, d);
    }
}