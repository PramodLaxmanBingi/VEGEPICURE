const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    container.classList.remove("left-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simulate registration logic
    alert("Registration successful!");
    container.classList.remove("right-panel-active");
});
