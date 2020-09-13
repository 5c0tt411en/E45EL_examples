var x_off = 1000,y_off = 1000,z_off = 1000;
var vertices_amount = 200;
var Z_SPEED = .003; // noise change per frame
var X_SPEED = 0;
var Y_SPEED = 0;
var NOISE_SCALE = 300;  // the higher the softer

function setup() {
    createCanvas(400, 400);
    background(255);
}

function draw() {
    let w = width, h = height;
    var r = (w < h)?w/4:h/4; // radius is a third of the smaller screen dimension 
    var px_offset = r/2;    // amplitude

    var prevTime;
    var color_x, color_speed = -.25
    colorMode(HSB, 360);

    push();
    translate(w / 2, h / 2);
    let sc = millis() / 100000;
    scale(sc);
  
    noFill();
    stroke(360 * noise(millis() / 10000) , 100, 360);
    beginShape();
    for (var a=0; a<TWO_PI;a+=TWO_PI/vertices_amount) {
        var x = r*sin(a);
        var y = r*cos(a);
    
        var new_x = x + 20 * (
                    noise(
            ((x_off+x)/NOISE_SCALE),
            ((y_off+y)/NOISE_SCALE),
                z_off) * px_offset * sin(a));
    
        var new_y = y + 20 *(
                    noise(
            ((x_off+x)/NOISE_SCALE),
            ((y_off+y)/NOISE_SCALE),
                z_off) * px_offset * cos(a))
        vertex(new_x,new_y);
    }
    endShape();
  
    pop();
  
  
    // update NOISE offsets
    z_off += Z_SPEED;
    x_off += X_SPEED;
    y_off += Y_SPEED;
    color_x += color_speed;
    if(color_x > 360) color_x -= 360;
}