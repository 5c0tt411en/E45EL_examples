let n = 50;

function setup() {
    createCanvas(400, 400);
}
 
function draw() {
    background(255);
    lines(0, height / 2, 1);
    lines(0, height / 2, 2);
    lines(width / 2, 0, 3);
    lines(width / 2, height, 4);
    lines(width / 2, height, 1);
    lines(width / 2, 0, 2);
    lines(width, height / 2, 3);
    lines(width, height / 2, 4);
}

function lines(x, y, direction) { 
    let toX;
    let toY; 
    if (direction == 1) {
        toX = x + width / 2;
        toY = y - height / 2;
        for (let i = 0; i <= n; i++) { 
            line(x, y, toX, toY + (i / n) * height / 2);
        }
     }
    else if (direction == 2) {
        toX = x + width / 2;
        toY = y + height / 2;
        for (let i = 0; i <= n; i++) { 
            line(x, y, toX - (i / n) * width / 2, toY);
        }
     }
    else if (direction == 3) {
        toX = x - width / 2;
        toY = y + height / 2;
        for (let i = 0; i <= n; i++) { 
            line(x, y, toX, toY - (i / n) * height / 2);
        }
     }
    else if (direction == 4) {
        toX = x - width / 2;
        toY = y - height / 2;
        for (let i = 0; i <= n; i++) { 
            line(x, y, toX + (i / n) * width / 2, toY);
        }
     }
}