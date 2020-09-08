let n = 200;
let x = [];
let y = [];
let d = [];
let vx = [];
let vy = [];
let c = [];
let thre = 50;


function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < n; i++) {
        d[i] = int(random(1, 3));
        x[i] = int(random(d[i] / 2, width - d[i] / 2));
        y[i] = int(random(d[i] / 2, height - d[i] / 2));
        for (;;) { 
            vx[i] = int(random(-3, 3));
            if (vx[i] != 0) break;
        }
        for (;;) { 
            vy[i] = int(random(-3, 3));
            if (vy[i] != 0) break;
        }
        c[i] = color(random(100, 140), random(150, 220), random(150, 250));
        console.log('test') 
    }
}
 
function draw() {
    background(0);
    for (let i = 0; i < n; i++) {
        pingpong(i);
        connect(i);
    }
}


function pingpong(i) {
    if (x[i] >= width - d[i] / 2 || x[i] <= d[i] / 2)
        vx[i] = -vx[i];
    if (y[i] >= height - d[i] / 2 || y[i] <= d[i] / 2)
        vy[i] = -vy[i];
    x[i] += vx[i];
    y[i] +=vy[i];
    
    fill(c[i]);
    stroke(255);
    ellipse(x[i], y[i], d[i], d[i]);
}

function connect(i) {
    stroke(c[i]);
    for (let j = 0; j < n; j++) {
        if (i != j && i < j) {
            if (dist(x[i], y[i], x[j], y[j]) <= thre)
                line(x[i], y[i], x[j], y[j]);
        }
    }
}