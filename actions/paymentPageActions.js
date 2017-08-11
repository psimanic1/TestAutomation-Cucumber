var paymentPageActions = function () {
    this.fillPaymentInfo = function (cardNumber, monthOfExp, yearOfExp, securityCode) {
        this.fillPassengersDetails('MR', 'Predrag', 'Simanic', 'John', 'Smith', 4, 'Feb', 2016, 0);
        this.fillPassengersDetails('MS', 'Mrs', 'Smith', 'John', 'Smith', 9, 'Jan', 2017, 1);
        this.fillCardDetails('Bosnia and Herzegovina', '61509822', cardNumber, monthOfExp, yearOfExp, securityCode, 'Predrag Simanic');
        this.fillBillingAddressInfo('Sun Lane', 'Sun Land', 'Dublin', '12345');
        pages.paymentPage.acceptTermsOfService().click();
        return pages.paymentPage.payNow().click();
    };

    this.fillPassengersDetails = function (passengerTitle, passengerFirstName, passengerLastName, infantFirstName, infantLastName, infantDayOfBirth, infantMonthOfBirth, infantYearOfBirth, passengersIndex) {
        this.fillAdultPassengerDetails(passengersIndex, passengerTitle, passengerFirstName, passengerLastName)
        return this.fillInfantPassengerDetails(passengersIndex, infantFirstName, infantLastName, infantDayOfBirth, infantMonthOfBirth, infantYearOfBirth);
    };

    this.fillAdultPassengerDetails = function (passengersIndex, passengerTitle, passengerFirstName, passengerLastName) {
        pages.paymentPage.passengerTitle(passengersIndex).click();
        pages.paymentPage.chooseTitle(passengerTitle, passengersIndex).click();
        pages.paymentPage.passengerFirstName(passengersIndex).sendKeys(passengerFirstName);
        return pages.paymentPage.passengerLastName(passengersIndex).sendKeys(passengerLastName);
    };

    this.fillInfantPassengerDetails = function (passengersIndex, infantFirstName, infantLastName, infantDayOfBirth, infantMonthOfBirth, infantYearOfBirth) {
        if (passengersIndex === 0) {
            pages.paymentPage.infantFirstName(0).sendKeys(infantFirstName);
            pages.paymentPage.infantLastName(1).sendKeys(infantLastName);
        } else {
            pages.paymentPage.infantFirstName(2).sendKeys(infantFirstName);
            pages.paymentPage.infantLastName(3).sendKeys(infantLastName);
        }
        pages.paymentPage.infantDayOfBirth(passengersIndex).click();
        pages.paymentPage.chooseDayOfBirth(infantDayOfBirth, passengersIndex).click();
        pages.paymentPage.infantMonthOfBirth(passengersIndex).click();
        pages.paymentPage.chooseMonthOfBirth(infantMonthOfBirth, passengersIndex).click();
        pages.paymentPage.infantYearOfBirth(passengersIndex).click();
        return pages.paymentPage.chooseYearOfBirth(infantYearOfBirth, passengersIndex).click();
    };

    this.fillCardDetails = function (country, phoneNumber, cardNumber, monthOfExp, yearOfExp, securityCode, cardHoldersName) {
        browser.executeScript('window.scrollTo(800,143);').then(function () {
            pages.paymentPage.phoneNumberCountry().click();
        });
        pages.paymentPage.chooseCountry(country).click();;
        pages.paymentPage.phoneNumber().sendKeys(phoneNumber);
        pages.paymentPage.cardNumber().sendKeys(cardNumber);
        pages.paymentPage.cardType().click();
        pages.paymentPage.chooseMasterCard().click();
        pages.paymentPage.cardExpiryMonth().click();
        pages.paymentPage.chooseMonthOfExpiration(monthOfExp, 2).click();
        pages.paymentPage.cardExpiryYear().click();
        pages.paymentPage.chooseYearOfExpiration(yearOfExp, 2).click();
        pages.paymentPage.securityCode().click();
        pages.paymentPage.securityCode().sendKeys(securityCode);
        return pages.paymentPage.cardHoldersName().sendKeys(cardHoldersName);
    };

    this.fillBillingAddressInfo = function (billingAddress1, billingAddress2, billingAddressCity, billingAddressPostcode) {
        pages.paymentPage.billingAddress1().sendKeys('Sun Lane');
        pages.paymentPage.billingAddress2().sendKeys('Sun Land');
        pages.paymentPage.billingAddressCity().sendKeys('Dublin');
        return pages.paymentPage.billingAddressPostcode().sendKeys('12345');
    };
    
};

module.exports = paymentPageActions;