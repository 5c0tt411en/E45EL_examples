let n = 100;
function setup() {
    createCanvas(400, 400);
    textAlign(CENTER, CENTER);
    strokeWeight(3);
    drawingContext.shadowOffsetX = 5;
    drawingContext.shadowOffsetY = 5;
}
 
function draw() {
    background(0);
    for (let i = 0; i < n; i++) { 
        let col = color(100, 220, 200, map(i, 0, n - 1, 1, 120));
        drawingContext.shadowBlur = map(i, 0, n - 1, 30, 5);
        drawingContext.shadowColor = col;
        textSize(2 * n - i);
        let x = width / 2 - ((n - i) / n) * noise(i / 20) * width / 2;
        let y = height * (1.2 * n - i / 1.2) / n;
        i == n - 1 ? stroke(col) : noStroke();
        i == n - 1 ? blendMode(BLEND) : blendMode(ADD);
        fill(i == n - 1 ? 255 : col);
        text("melt", x, y);
    }
    noLoop();
}