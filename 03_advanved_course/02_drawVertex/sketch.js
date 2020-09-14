function setup() {
    createCanvas(400, 400);
    blendMode(ADD);
    colorMode(HSB);
}
 
function draw() {
    background(0);

    for (let j = 0; j < 15; j++) {
        // stroke(255);
        fill(random(50, 360), 100, 100, 0.4);
        beginShape();
        for (let i = 2; i <= 10; i+=2) {
            vertex(width / 2 + (random() < 0.5 ? width / i : - width / i),
                height / 2 + (random() < 0.5 ? height / i : - height / i));
        }        
        endShape();
    }
    noLoop();
}