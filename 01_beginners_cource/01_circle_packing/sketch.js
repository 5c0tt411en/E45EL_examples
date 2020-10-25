let circles;
let img;

function preload() {
    img = loadImage("data/star.png");
}

function setup() {
    createCanvas(400, 400);
    let density = displayDensity();
    pixelDensity(1);
    img.loadPixels();
    circles = [];
}

function draw() {
    background(255);

    let total = 20;
    let count = 0;
    let attempts = 0;

    while (count < total) {
        let newC = newCircle();
        if (newC !== null) {
            circles.push(newC);
            count++;
        }
        attempts++;
        if (attempts > 1000) {
            noLoop();
            console.log("finished");
            break;
        }
    }

    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];

        if (circle.growing) {
        if (circle.edges()) {
            circle.growing = false;
        } else {
            for (let j = 0; j < circles.length; j++) {
            let other = circles[j];
            if (circle !== other) {
                let d = dist(circle.x, circle.y, other.x, other.y);
                let distance = circle.r + other.r;

                if (d - 1 < distance) {
                circle.growing = false;
                break;
                }
            }
            }
        }
        }

        circle.show();
        circle.grow();
    }
}

function newCircle() {
    let x = random(0, img.width);
    let y = random(0, img.height);

    let valid = true;
    for (let i = 0; i < circles.length; i++) {
        let circle = circles[i];
        let d = dist(x, y, circle.x, circle.y);
        if (d - 5 < circle.r - 0.1) {
        valid = false;
        break;
        }
    }
    if (valid) {
        let index = (int(x) + int(y) * img.width) * 4;
        let r = img.pixels[index];
        let g = img.pixels[index+1];
        let b = img.pixels[index+2];
        let c = color(r,g,b);
        return new Circle(x, y, color(c));
    } else {
        return null;
    }
}

function Circle(x, y, color) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.color = color;
    this.growing = true;

    this.grow = function() {
        if (this.growing) {
        this.r += 0.5;
        }
    }

    this.show = function() {
        noStroke();
        fill(this.color);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }

    this.edges = function() {
        return (this.x + this.r >= width || this.x - this.r <= 0 || this.y + this.r >= height || this.y - this.r <= 0)
    }
}