class Bit {
    constructor(x, y, radius, state) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.state = state;
    }

    draw() {
        if (this.state) {
            fill(0, 150, 0);
        } else {
            fill(255, 0, 0);
        }
        ellipse(this.x, this.y, this.radius);
    }
}