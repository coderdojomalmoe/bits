class Bit {
  constructor(x, y, diameter) {
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.state = false;
  }
  
  draw() {
    stroke(255);
    if(this.state)
      fill(0,155,0);
    else
      fill(255,0,0);
    ellipse(this.x, this.y, this.diameter);
  }
  
  setState(state) {
    this.state = Boolean(parseInt(state));
  }
  
  contains(x,y) {
    let d = dist(x,y,this.x, this.y);
    if (d < this.diameter/2)
    {
      this.toggle();
    }
  }
  
  toggle() {
    this.state = !this.state;
  }
}