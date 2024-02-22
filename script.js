function registerForWorkshop() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;

    // Additional validation can be added here

    alert(`Thank you, ${fullName}! You are now registered for the Worm Composting Workshop. We will contact you via email at ${email}.`);
}
