let x = 0.1, y = 0.1;
let a =  1.25, b = 0.75;

function setup() {
    createCanvas(400, 400);
    blendMode(ADD);
    background(0);
    stroke(124, 155, 255, 50);
}

function draw() {
    let _x, _y;

    for (let i = 0; i < 100; i++) {

        _x = (1 + a * b) * x - b * x * y;
        _y = (1 - b) * y + b * x * x;

        point(_x * 80 + width*0.5, - _y * 80 + height);

        x = _x;
        y = _y;
    }
}