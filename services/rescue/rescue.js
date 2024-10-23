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


