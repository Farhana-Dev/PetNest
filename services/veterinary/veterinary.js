document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const descriptionInput = document.getElementById('description');
    const submitButton = document.querySelector('form button');

    // Simple form validation
    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Check if the name input is empty
        if (nameInput.value.trim() === '') {
            isValid = false;
            nameInput.style.border = '2px solid red';
        } else {
            nameInput.style.border = '1px solid #e5e7eb';
        }

        // Check if the email or phone input is empty
        if (emailInput.value.trim() === '') {
            isValid = false;
            emailInput.style.border = '2px solid red';
        } else {
            emailInput.style.border = '1px solid #e5e7eb';
        }

        // Check if the description input is empty
        if (descriptionInput.value.trim() === '') {
            isValid = false;
            descriptionInput.style.border = '2px solid red';
        } else {
            descriptionInput.style.border = '1px solid #e5e7eb';
        }

        // Prevent form submission if any field is invalid
        if (!isValid) {
            event.preventDefault();
            alert('Please fill in all fields.');
        } else {
            alert('Form submitted successfully!');
        }
    });

    // Button hover animation
    submitButton.addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.1)';
        this.style.backgroundColor = '#ff5722';
    });

    submitButton.addEventListener('mouseout', function () {
        this.style.transform = 'scale(1)';
        this.style.backgroundColor = '#1f2937';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const pawIcon = document.querySelector('.paw-icon');
    const boneIcon = document.querySelector('.bone-icon');

    // Simple floating animation for the icons
    function animateIcons() {
        pawIcon.style.transition = 'transform 1s ease-in-out';
        boneIcon.style.transition = 'transform 1s ease-in-out';

        pawIcon.style.transform = 'translateY(-10px)';
        boneIcon.style.transform = 'translateY(-10px)';

        setTimeout(() => {
            pawIcon.style.transform = 'translateY(0)';
            boneIcon.style.transform = 'translateY(0)';
        }, 1000);
    }

    // Repeat the animation every 2 seconds
    setInterval(animateIcons, 2000);
});
function changeImage(imageSrc) {
    document.getElementById('main-image').src = imageSrc;
}

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
//description & requirement
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tab buttons
    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an active class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default active tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("description").style.display = "block";
});
document.querySelectorAll('.filter input').forEach(input => {
    input.addEventListener('change', function () {
        // Implement the filtering logic here
        console.log('Filter changed:', this.value);
    });
});
