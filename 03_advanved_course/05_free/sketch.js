let t;
let stepSize = 100;

function setup() {
    createCanvas(400, 400);
    stroke(0, 18);
    noFill();
    t = 0;
    background(0);
}

function draw() {
    if (frameCount % 1000 == 0) { 
        blendMode(BLEND);
        background(0, 150);
    }
    blendMode(ADD);
    let from = color(50, 100, 200, 40);
    let to = color(200, 100, 50, 40);
    stroke(lerpColor(from, to, (1 + sin(t * 5)) / 2));
    let x1 = width * noise(t);
    let x2 = width * noise(t + stepSize);
    let x3 = width * noise(t + stepSize * 2);
    let x4 = width * noise(t + stepSize * 3);
    let y1 = height * noise(t + stepSize * 4);
    let y2 = height * noise(t + stepSize * 5);
    let y3 = height * noise(t + stepSize * 6);
    let y4 = height * noise(t + stepSize * 7);

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);

    t += 0.01;

}