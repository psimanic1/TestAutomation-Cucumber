var LoginPage = function () {
    this.inputEmail = function () {
        return element(by.css('[type="email"]'));
    };

    this.inputPassword = function () {
        return element(by.css('[name="password"]'));
    };
    
    this.loginButton = function () {
        return element(by.css('.modal-form-group [type="submit"]'))
    };
}

module.exports = LoginPage;