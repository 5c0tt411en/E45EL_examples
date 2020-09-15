let n = 3;

function setup() {
    createCanvas(400, 400);
    background(255);
}
 
function draw() {
    colorMode(HSB, n);
}

function mouseDragged() {
    counter = 0;
    let d = 30 * noise(millis() / 500);
    for (let i = 0; i < n; i++) {
        fill((i + n) / 2, n / 3, n);
        stroke((i + n) / 2, n, n);
        let x = mouseX + d * cos(radians(millis() / 2 + i * 360 / n));
        let y = mouseY + d * sin(radians(millis() / 2 + i * 360 / n));
        circle(x, y, d);
    }
}

function mouseReleased() { 
    n = random(1, 10);
    colorMode(HSB, n);
}