var paymentPage = function () {
    this.formElement = function (num) {
        return element.all(by.css('.pax-form-element')).get(num);
    };

    this.passengerTitle = function (num) {
        return element.all(by.css('.form-field.payment-passenger-title')).get(num);
    };

    this.chooseTitle = function (value,num) {
        return element.all(by.css('[value="string:' + value + '"]')).get(num);
    };

    this.passengerFirstName = function (num) {
        return element.all(by.css('.form-field.payment-passenger-first-name input')).get(num);
    };

    this.passengerLastName = function (num) {
        return element.all(by.css('.form-field.payment-passenger-last-name input')).get(num);
    };

    this.infantFirstName = function (num) {
        return element.all(by.css('.form-field.payment-passenger-infant-col input')).get(num);
    };

    this.infantLastName = function (num) {
        return element.all(by.css('.form-field.payment-passenger-infant-col input')).get(num);
    };

    this.infantDayOfBirth = function (num) {
        return element.all(by.css('[name="day"]')).get(num);
    };

    this.chooseDayOfBirth = function (day,num) {
        return element.all(by.css('[value="number:' + day + '"]')).get(num);
    };

    this.infantMonthOfBirth = function (num) {
        return element.all(by.css('[name="month"]')).get(num);
    };

    this.chooseMonthOfBirth = function (month,num) {
        return element.all(by.css('[value="string:' + month + '"]')).get(num);
    };

    this.infantYearOfBirth = function (num) {
        return element.all(by.css('[name="year"]')).get(num);
    };

    this.chooseYearOfBirth = function (year,num) {
        return element.all(by.css('[value="number:'+year+'"]')).get(num);
    };

    this.phoneNumberCountry = function () {
        return element(by.css('[name="phoneNumberCountry"]'));
    };

    this.chooseCountry = function (country) {
        return element.all(by.css('[label="'+country+'"]'));
    };

    this.phoneNumber = function () {
        return element(by.css('.phone-number [name="phoneNumber"]'));
    };

    this.cardNumber = function () {
        return element(by.css('[name="cardNumber"]'));
    };

    this.cardType = function () {
        return element(by.css('.core-select.card-type-select select'));
    };

    this.chooseMasterCard = function () {
        return element(by.css('[value="MC"]'));
    };

    this.cardExpiryMonth = function () {
        return element(by.css('[name="expiryMonth"]'));
    };

    this.chooseMonthOfExpiration = function (month,num) {
        return element.all(by.css('[value="number:'+month+'"]')).get(num);
    };

    this.chooseYearOfExpiration = function (year) {
        return element(by.css('[value="number:'+year+'"]'))
    };

    this.cardExpiryYear = function () {
        return element(by.css('[name="expiryYear"]'));
    };

    this.securityCode = function () {
        return element(by.css('.core-input.ng-pristine.ng-untouched.ng-empty.ng-invalid.ng-invalid-required.ng-valid-pattern.ng-valid-minlength.ng-valid-maxlength'));
    };

    this.cardHoldersName = function () {
        return element(by.css('[name="cardHolderName"]'));
    };

    this.billingAddress1 = function () {
        return element(by.css('[name="billingAddressAddressLine1"]'));
    };

    this.billingAddress2 = function () {
        return element(by.css('[name="billingAddressAddressLine2"]'));
    };

    this.billingAddressCity = function () {
        return element(by.css('[name="billingAddressCity"]'));
    };

    this.billingAddressPostcode = function () {
        return element(by.css('[name="billingAddressPostcode"]'));
    };

    this.billingAddressCountry = function () {
        return element(by.css('[name="billingAddressCountry"]'));
    };

    this.acceptTermsOfService = function () {
        return element(by.css('[name="acceptPolicy"]'));
    };

    this.payNow = function () {
        return element(by.css('.core-btn-primary.core-btn-medium'));
    };

    this.PaymentUnauthorized = function () {
        return element(by.css('.error .info-text'));
    };
    
};
module.exports = paymentPage;