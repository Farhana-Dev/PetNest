//grooming form
document.getElementById('grooming-select').addEventListener('change', function () {
    var basicBath = document.getElementById('basic-bath');
    var fullGroom = document.getElementById('full-groom');
    
    if (this.value === 'basic') {
        basicBath.style.display = 'block';
        fullGroom.style.display = 'none';
    } else if (this.value === 'full') {
        basicBath.style.display = 'none';
        fullGroom.style.display = 'block';
    } else {
        basicBath.style.display = 'none';
        fullGroom.style.display = 'none';
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
