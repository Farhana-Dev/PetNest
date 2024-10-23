// Example of potential JS for interactivity (Optional)
document.querySelector('.services-btn').addEventListener('click', () => {
    alert('Explore our services!');
});
// script.js

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
        alert(`You clicked on ${card.querySelector('p').textContent}`);
    });
});

document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the 'active' class on the clicked item
        item.classList.toggle('active');

        // Toggle the display of the answer
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.toggle-icon');
        if (item.classList.contains('active')) {
            answer.style.display = 'block';
            icon.textContent = '-';  // Change the icon to minus when expanded
        } else {
            answer.style.display = 'none';
            icon.textContent = '+';  // Change the icon to plus when collapsed
        }
    });
});

document.getElementById('grooming-options').addEventListener('change', function() {
    let basicBath = document.getElementById('basic-bath');
    let fullGroom = document.getElementById('full-groom');
    
    if (this.value === 'basic-bath') {
        basicBath.style.display = 'block';
        fullGroom.style.display = 'none';
    } else if (this.value === 'full-groom') {
        basicBath.style.display = 'none';
        fullGroom.style.display = 'block';
    }
});

// Date picker logic (can be replaced with a proper date picker library)
document.getElementById('date-picker-button').addEventListener('click', function() {
    let date = prompt('Enter a date in dd-mm-yyyy format:');
    if (date) {
        document.getElementById('date').value = date;
    }
});



