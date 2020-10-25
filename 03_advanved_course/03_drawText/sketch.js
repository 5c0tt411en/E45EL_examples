let c = ['#855A34', '#207720', '#86C036']

function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, CENTER);
    noStroke();
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 5;
}

function draw() {
    background(255);
    translate(width / 2, height);
    branch(100);
    translate(0, -150);
    noLoop();
}
function branch(length) {
    translate(0, -length);

    fill(c[0]);
    textSize(length / 3.2);
    push();
    rotate(PI / 2);
    translate(length / 2, 0);
    text('branch', 0, 0);
    pop();
    if (length < 70) {
        random(1.0) >= 0.5 ? fill(c[1]) : fill(c[2]);
        textSize(length / 2);
        push();
        if (random(1.0) >= 0.5) {
            translate(length / 2, 0);
            text('leaf', 0, 0);
        }
        else {
            translate(- length / 2, 0);
            text('leaf', 0, 0);
        }
        pop();
    }
    if (length > 10) {
        if (random(1.0) >= 0.1) {
            push();
            rotate(PI / 8);
            branch(length * 0.75);
            pop();
        }
        if (random(1.0) >= 0.1) {
            push();
            rotate(-PI / 8);
            branch(length * 0.75);
            pop();
        }
    }
} 