let initialState = "00100001";
let byte = [];
let size = initialState.length;
let div;

function setup() {
    createCanvas((size / 2) * 100, 100);
    div = createDiv();

    let w = width / size;
    for (let i = 0; i < size; i++) {
        let state = initialState.charAt(i) == '1';
        byte[i] = new Bit(w / 2 + i * w, 50, w - 4, state);
    }
}

function draw() {
    for (let i = 0; i < byte.length; i++) {
        byte[i].draw();
    }

    div.html(binaryToDecimal(initialState));
}

function binaryToDecimal(val) {
    let decimal = 0;

    for (let i = 0; i < val.length; i++) {
        let bit = val.charAt(val.length - i - 1);
        decimal += parseInt(bit) * pow(2, i);
    }
    return decimal;
}