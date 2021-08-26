

class Particles{
	constructor(x, y, radius) {
		var options = {
		restitution:0.4
		}
		this.body = Bodies.circle(x, y, radius, options);
		this.radius = radius;
		World.add(world, this.body)
	}
	display() {
		var pos = this.body.position;
		var angles = this.body.angles;
		push();
		translate(pos.x, pos, y);
		rotate(angles)
		noStroke();
		fill(this.color)
		ellispeMode(RADIUS)
		ellipse(0,0,this.radius, this.radius)
		pop()
	}
}