const size = 8;

let num = "00000001";
let byte = [];
let decimalP;

function mousePressed() {
  for (let i = 0; i < size; i++) {
    byte[i].contains(mouseX, mouseY);
  }
}

function setup() {
  createCanvas((size/2)*100, 100);
  decimalP = createDiv();

  let w = width / size;
  for (let i = 0; i < size; i++) {
    byte[i] = new Bit(w / 2 + i * w, 50, w - 4);
    byte[i].setState(num.charAt(i));
  }

  num = '';
}

function draw() {
  background(220);

  num = '';

  for (let i = 0; i < size; i++) {
    byte[i].draw();
    num += byte[i].state ? '1' : '0';
  }

  decimalP.html(binaryToDecimal(num));
}

function binaryToDecimal(val) {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    let bit = val.charAt(val.length - i - 1);
    sum += parseInt(bit) * pow(2, i);
  }
  return sum;
}