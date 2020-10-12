(function () {
    window.addEventListener('load', function () {
        var regForm = this.document.querySelector(".register-form");
        var submitButton = this.document.querySelector('.register-form [type=button]');
        submitButton.addEventListener('click', function () {
            var v = new validator();
            var loginInput = document.querySelector('.login');
            v.validate(loginInput.value, {
                MAX_LETTERS: 12,
                MIN_LETTERS: 3,
                WRONG: true
            }, false);
            var emailInput = document.querySelector('.email');
            v.validate(emailInput.value, {
                MAX_LETTERS: 32,
                MIN_LETTERS: 10,
                WRONG: true,
                EMAIL_CHECK: true
            }, false);
            var passInput = document.querySelector('.password');
            v.validate(passInput.value, {
                MAX_LETTERS: 24,
                MIN_LETTERS: 8,
                WRONG: true,
                PASSWORD_HARD: true
            }, false);
            var confpass = document.querySelector('.confpass');
            v.validate(confpass.value, {
                MAX_LETTERS: 24,
                MIN_LETTERS: 8,
                WRONG: true,
                PASSWORD_HARD: true
            }, false);
            if (passInput.value != confpass.value) {
                console.log("Passwords do not match");
                return;
            }
            if (v.get_errors().length == 0) {
                regForm.submit();
            } else {
                console.log(v.get_errors(0));
            }
        });
    });
})()