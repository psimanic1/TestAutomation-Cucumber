var Pages = require('../pages/pages.js');
var pages = new Pages();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
var bookingPageActions = function () {
    this.chooseBookingOptions = function () {
        browser.sleep(3000);
        pages.bookingPage.bookingPrice().click().then(function () {
            console.log('Chosen booking price');
        });
        browser.sleep(1500);
        browser.executeScript('window.scrollTo(420,556);').then(function () {
            pages.bookingPage.chooseStandardFare().click().then(function () {
                console.log("Fare was chosen by user");
            });
        });
        return pages.bookingPage.continueWithBooking().click();
    };
};
module.exports = bookingPageActions;