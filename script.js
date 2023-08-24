document.addEventListener('DOMContentLoaded', () => {
    const captchaContainer = document.getElementById('captcha');
    const captchaText = document.getElementById('captchaText');
    const captchaInput = document.getElementById('captchaInput');
    const loginButton = document.getElementById('loginButton');

    function generateCaptcha() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return captcha;
    }

    function validateCaptcha(inputCaptcha, generatedCaptcha) {
        return inputCaptcha === generatedCaptcha;
    }

    const generatedCaptcha = generateCaptcha();
    captchaContainer.textContent = generatedCaptcha;

    loginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const enteredCaptcha = captchaInput.value;

        if (validateCaptcha(enteredCaptcha, generatedCaptcha)) {
            // Here you would typically perform further validation and login logic
            alert('Login successful!');
        } else {
            alert('CAPTCHA verification failed.');
        }
    });
});
