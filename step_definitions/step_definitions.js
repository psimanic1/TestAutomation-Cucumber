var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
module.exports = function () {
    this.setDefaultTimeout(400 * 1000);
    
    this.Before(function () {
        browser.driver.manage().window().maximize();
        browser.get('https://www.ryanair.com');
        actions.homePageActions.userLogin();
    });

    this.Given(/^I make a booking from "([^"]*)" to "([^"]*)" on "([^"]*)" for "([^"]*)" adults and "([^"]*)" childs and "([^"]*)" and "([^"]*)" infants$/, function (flightFrom, flightTo, flightDate, numOfAdults, numOfChilds, numOfTeens, numOfInfants) {
        return actions.homePageActions.bookAFlightAction(flightFrom, flightTo, flightDate, numOfAdults, numOfChilds, numOfTeens, numOfInfants);
    });

    this.Then(/^I choose booking options with standard fare$/, function () {
        browser.sleep(2000);
        return actions.bookingPageActions.chooseBookingOptions();
    });

    this.Then(/^I "([^"]*)" seats$/, function (seats) {
        browser.sleep(1000);
        return actions.extrasPageActions.chooseSeats(seats);
    });

    this.When(/^I pay for booking with card details “(\d+)", “(\d+)\/(\d+)” and “(\d+)”$/, function (cardNumber, monthOfExp, yearOfExp, securityCode) {
        browser.sleep(1000);
        return actions.paymentPageActions.fillPaymentInfo(cardNumber, monthOfExp, yearOfExp, securityCode);
    });

    this.Then(/^I should get payment declined message$/, function () {
        browser.sleep(1000);
        return expect(pages.paymentPage.PaymentUnauthorized().getText()).to.eventually.equal('As your payment was not authorised we could not complete your reservation. Please ensure that the information was correct or use a new payment to try again');
    });
    
}