// Function to show the success toast when the send message button is clicked
function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (name && email && message) {
        // Show success toaster
        showToast('Message sent successfully!');

        // Clear form fields after sending the message
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Function to show the success toast
function showToast(message) {
    // Create a new div for the toast
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    // Add the toast to the container
    const container = document.getElementById('toast-container');
    container.appendChild(toast);

    // Show the toast with an animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);  // Small delay for the animation

    // Remove the toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        // Remove from DOM after animation
        setTimeout(() => {
            toast.remove();
        }, 300);  // Match the CSS transition time
    }, 3000);  // Toast duration
}
