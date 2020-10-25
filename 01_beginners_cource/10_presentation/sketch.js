let n = 200;
let x = [];
let y = [];
let d = [];
let vx = [];
let vy = [];
let c = [];
let thre = 30;
let col = ['#FF9984', '#FF872F', '#85E9BE', '#28A9FF', '#FFFFFF'];

function setup() {
    createCanvas(400, 400);
    for (let i = 0; i < n; i++) {
        d[i] = int(random(3, 20));
        x[i] = int(random(d[i] / 2, width - d[i] / 2));
        y[i] = int(random(d[i] / 2, height - d[i] / 2));
        for (;;) { 
            vx[i] = random(-1, 1);
            if (vx[i] != 0) break;
        }
        for (;;) { 
            vy[i] = random(-1, 1);
            if (vy[i] != 0) break;
        }
        c[i] = col[int(random(4))];
    }
}
 
function draw() {
    background(col[4]);
    for (let i = 0; i < n; i++) {
        connect(i);
        pingpong(i);
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
    ellipse(x[i], y[i], d[i], d[i]);
}

function connect(i) {
    stroke(c[i]);
    for (let j = 0; j < n; j++) {
        if (i != j && i < j) {
            if (dist(x[i], y[i], x[j], y[j]) <= thre) {
                strokeWeight(2);
                line(x[i], y[i], x[j], y[j]);
            }
        }
    }
}