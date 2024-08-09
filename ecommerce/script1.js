document.getElementById('contactBtn').addEventListener('click', function () {
    document.getElementById('overlay').classList.add('active');
    this.style.display = 'none';  // Hide the "Contact Us" button
});

document.getElementById('overlay').addEventListener('click', function (e) {
    if (e.target === this) {
        this.classList.remove('active');
        document.getElementById('contactBtn').style.display = 'block';  // Show the "Contact Us" button again
    }
});
// document.addEventListener('DOMContentLoaded', function () {
//     document.getElementById('overlay').classList.add('active');
// });
