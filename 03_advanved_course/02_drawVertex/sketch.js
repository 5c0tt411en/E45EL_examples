function setup() {
    createCanvas(400, 400);
    colorMode(HSB);
    noStroke();
}
 
function draw() {
    background(255);
    for (let j = 0; j < 15; j++) {
        fill(random(50, 360), 100, 100, 0.33);
        beginShape();
        for (let i = 2; i <= 10; i+=2) {
            vertex(width / 2 + (random() < 0.5 ? width / i : - width / i),
                height / 2 + (random() < 0.5 ? height / i : - height / i));
        }        
        endShape();
    }
    noLoop();
}