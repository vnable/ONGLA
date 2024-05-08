document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input[type="text"]');
    var button = document.getElementById('registerButton');

    function updateButtonState() {
        button.disabled = !Array.from(inputs).every(input => input.value.trim());
    }

    inputs.forEach(input => {
        input.addEventListener('keyup', updateButtonState);
    });
});