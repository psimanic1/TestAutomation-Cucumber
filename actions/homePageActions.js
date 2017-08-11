var Pages = require('../pages/pages.js');
var pages = new Pages();
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var Cucumber = require('cucumber');
chai.use(chaiAsPromised);
var expect = chai.expect;
var homePageActions = function () {
    this.userLogin = function () {
        pages.homePage.login().click();
        browser.sleep(1000);
        pages.loginPage.inputEmail().sendKeys('psimanic1@gmail.com');
        pages.loginPage.inputPassword().sendKeys('Psimanic1');
        browser.sleep(1000);
        return pages.loginPage.loginButton().click();
    };

    this.bookAFlightAction = function (flightFrom, flightTo, flightDate, numOfAdults, numOfChilds, numOfTeens, numOfInfants) {
        pages.homePage.oneWayFlight().click();
        pages.homePage.flightFrom().clear();
        pages.homePage.flightFrom().sendKeys(flightFrom);
        pages.homePage.flightFrom().sendKeys(protractor.Key.TAB).perform;
        browser.sleep(500);
        pages.homePage.flightTo().sendKeys(flightTo);
        pages.homePage.flightTo().sendKeys(protractor.Key.TAB).perform;
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(201,556);').then(function () {
            pages.homePage.chooseFlyOutDate(flightDate).click();
        })
        pages.homePage.choosePassengers().click();
        for (i = 0; i < numOfAdults - 1; i++) {//Because number of adults starts from 1, not 0 like other ones
            pages.homePage.addAdults().click().then(function () {
                console.log('Added one more adult');
            });
        }
        for (i = 0; i < numOfChilds; i++) {
            pages.homePage.addChildren().click().then(function () {
                console.log('Added one more children');
            });
        }
        for (i = 0; i < numOfTeens; i++) {
            pages.homePage.addTeens().click().then(function () {
                console.log('Added one more teen');
            });
        }
        var clicked = 0;
        for (i = 0; i < numOfInfants; i++) {
            pages.homePage.addInfants().click().then(function () {
                browser.sleep(500);
                if (clicked === 0) {
                    pages.homePage.flyingWithAnInfantAlertSubmit().click().then(function () {
                        console.log("Flying with infant");
                        browser.sleep(500);
                        clicked = 1;
                    });
                }
                console.log('Added one more infant');
            }), function (error) {
                expect(pages.homePage.alertMsg().getText()).to.eventually.equal('You can\'t travel with more infants than adults');
            };
        }
        return pages.homePage.submit().click();
    };
    
};

module.exports = homePageActions;