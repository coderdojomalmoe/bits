let initialState = "00000001";
let byte = [];
let decimalP;

function mousePressed() {
  for (let i = 0; i < byte.length; i++) {
    byte[i].contains(mouseX, mouseY);
  }
}

function setup() {
  const size = initialState.length;
  createCanvas((size/2)*100, 100);
  decimalP = createDiv();

  let w = width / size;
  for (let i = 0; i < size; i++) {
    byte[i] = new Bit(w / 2 + i * w, 50, w - 4);
    byte[i].setState(initialState.charAt(i));
  }
}

function draw() {
  background(220);

  for (let i = 0; i < byte.length; i++) {
    byte[i].draw();
  }

  decimalP.html(binaryToDecimal(byteToBinary(byte)));
}

function byteToBinary(byte)
{
  let binary = '';
  for (let i = 0; i < byte.length; i++) {
    binary += byte[i].state ? '1' : '0';
  }
  return binary;
}

function binaryToDecimal(val) {
  let sum = 0;
  for (let i = 0; i < val.length; i++) {
    let bit = val.charAt(val.length - i - 1);
    sum += parseInt(bit) * pow(2, i);
  }
  return sum;
}