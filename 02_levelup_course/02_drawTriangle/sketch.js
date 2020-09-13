let numTiles = 20;
let sizeTile;

let tiles = [];


function setup() {
    createCanvas(400, 400);
    noStroke();
	background(0);
	sizeTile = width / numTiles;
	colorMode(HSB, 255)
	for (let i = 0; i < numTiles; i++) {
		for (let j = 0; j < numTiles; j++) {
			tiles.push(new Tile);
			tiles[j + i * numTiles].x = j * sizeTile + sizeTile / 2;
			tiles[j + i * numTiles].y = i * sizeTile + sizeTile / 2;
			tiles[j + i * numTiles].col = [2 * j, 0.8 * i];
		}
	}
}

function draw() {
	background(0);
	for (let i = 0; i < numTiles * numTiles; i++) {
		tiles[i].display();
	}

}

function Tile() {
	this.x;
	this.y;
	this.r = sizeTile;
	this.orientation = random(1.0);
	this.col;
	
	this.display = function() {
		push();
        translate(this.x, this.y);
        fill(255);
		// fill(300 * noise(this.col[0], this.col[1]), 255, 255);
		if (this.orientation > 0.75) {
			triangle(-this.r / 2, -this.r / 2, this.r / 2, this.r / 2, this.r / 2, -this.r / 2);
		} else if (this.orientation > 0.5 && this.orientation <= 0.75) {
			triangle(this.r / 2, this.r / 2, -this.r / 2, -this.r / 2, -this.r / 2, this.r / 2);
		} else if (this.orientation > 0.25 && this.orientation <= 0.50) {
			triangle(this.r / 2, -this.r / 2, this.r / 2, this.r / 2, -this.r / 2, this.r / 2);
		} else {
			triangle(-this.r / 2, this.r / 2, -this.r / 2, -this.r / 2, this.r / 2, -this.r / 2);
		}
		pop();
	}
}