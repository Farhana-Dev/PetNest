//walking form
document.getElementById('increase').addEventListener('click', function () {
    let quantity = document.getElementById('quantity');
    quantity.value = parseInt(quantity.value) + 1;
});

document.getElementById('decrease').addEventListener('click', function () {
    let quantity = document.getElementById('quantity');
    if (quantity.value > 1) {
        quantity.value = parseInt(quantity.value) - 1;
    }
});

function decreaseValue() {
    var numberInput = document.getElementById('number');
    var value = parseInt(numberInput.value);
    if (value > 1) {
        numberInput.value = value - 1;
    }
}

function increaseValue() {
    var numberInput = document.getElementById('number');
    var value = parseInt(numberInput.value);
    numberInput.value = value + 1;
}
