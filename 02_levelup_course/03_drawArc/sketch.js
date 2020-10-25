let numTiles = 5;
let sizeTile;

let tiles = [];
let col = ['#E9EAFF', '#70B5B6'];


function setup() {
	createCanvas(400, 400);
	sizeTile = width / numTiles;
	noFill();
	strokeWeight(30);
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
	background(col[0]);
	for (let i = 0; i < numTiles * numTiles; i++) {
		tiles[i].display();
	}

}

function Tile() {
	this.x;
	this.y;
	this.r = sizeTile;
	this.orientation = random();
	this.col;
	
	this.display = function() {
		push();
		translate(this.x, this.y);
		stroke(col[1]);
		if (this.orientation > 0.5) {
			arc(-this.r / 2, -this.r / 2, this.r, this.r, 0, PI / 2);
			arc(this.r / 2, this.r / 2, this.r, this.r, -PI, -PI / 2);
		} else {
			arc(-this.r / 2, this.r / 2, this.r, this.r, -PI / 2, 0);
			arc(this.r / 2, -this.r / 2, this.r, this.r, PI / 2, PI);
		}
        pop();
	}
}