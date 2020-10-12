var validator = function () {
    var _checkString = null;
    var _errors = [];;
    var crit = {
        MAX_LETTERS: function (val) {
            if (_checkString.length > val) {
                _errors.push("Number of characters exceeded: ");
            }
        },
        MIN_LETTERS: function (val) {
            if (_checkString.length < val) {
                _errors.push("Not enough characters (or empty): ");
            }
        },
        WRONG: function (val) {

        },
        PASSWORD_HARD: function (val) {
            const pass = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(_checkString.length < val || pass.test(_checkString)){
                _errors.push("The password is weak. Use symbols like this to enhance: " + this.pass);
            }
        },
        EMAIL_CHECK: function (val) {
            const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!re.test(_checkString)) {
                _errors.push("This email is invalid");
            }
        }
    }
    this.get_errors = function (index = -1) {
        if (index == -1) return _errors;
        if (index >= 0 && index <= _errors.length) return _errors[index];
        console.error('Incorrect index value');
    }
    this.validate = function (checkStr = '', criterias, resetErrors = true) {
        _checkString = checkStr;
        if (resetErrors) {
            _errors = [];
        }
        for (const key in criterias) {
            if (criterias.hasOwnProperty(key)) {
                crit[key](criterias[key]);
            }
        }
    }
}