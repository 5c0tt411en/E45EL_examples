let t;
let stepSize = 1000;

function setup() {
    createCanvas(400, 400);
    noFill();
    t = 0;
    strokeWeight(3);
    background(255);
}

function draw() {
    let from = color(196, 42, 240, 20);
    let to = color(253, 219, 100, 20);
    stroke(lerpColor(from, to, (1 + sin(t * 5)) / 2));
    let x1 = width * (2 * noise(t) - 0.5);
    let x2 = width * (2 * noise(t + stepSize) - 0.5);
    let x3 = width * (2 * noise(t + stepSize * 1.2) - 0.5);
    let x4 = width * (2 * noise(t + stepSize * 1.3) - 0.5);
    let y1 = height * (2 * noise(t + stepSize * 1.4) - 0.5);
    let y2 = height * (2 * noise(t + stepSize * 1.5) - 0.5);
    let y3 = height * (2 * noise(t + stepSize * 1.6) - 0.5);
    let y4 = height * (2 * noise(t + stepSize * 1.7) - 0.5);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.005;

}