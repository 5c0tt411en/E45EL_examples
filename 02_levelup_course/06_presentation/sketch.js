let n = 15;
let x, y;
let mode = 0;
let rate = 0;
let col = ['#FFF1B8', '#76C6DE', '#C42AF0', '#F75C3D', '#FFFFFF']
let c = []

function setup() {
    createCanvas(400, 400);
    stroke(234, 90, 71, 20);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            c[i + j * n] = col[int(random(4))]
        }
    }
}
 
function draw() {
    background(col[4]);
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) { 
            stroke(c[i + j * n]);
            strokeWeight(50 * noise(10 * (i + j) / n));
            let x1 = width / 2 + 25 * (5 + 2 * cos(i)) * cos(j);
            let y1 = height / 2 + 25 * (5 + 2 * cos(i)) * sin(j);
            let x2 = width / 2 + 30 * (5 + 2 * cos(i)) * sin(j);
            let y2 = width / 3 + 60 * (sin(i) + 0.2 * j);
            let x3 = width / 2 + 200 * cos(i) * cos(j);
            let y3 = height / 2 + 200 * sin(i);
            if (mode == 0) {
                x = lerp(x1, x2, rate);
                y = lerp(y1, y2, rate);
            }
            else if (mode == 1) { 
                x = lerp(x2, x3, rate);
                y = lerp(y2, y3, rate);
            }
            else if (mode == 2) { 
                x = lerp(x3, x1, rate);
                y = lerp(y3, y1, rate);
            }
            point(x, y);
        }
     }
     rate+=0.005;
     if (rate >= 1) { 
         rate = 0;
         mode++;
         if (mode == 3) mode = 0;
     }
}