var HomePage = function () {
    this.login = function () {
        return element(by.css('[ui-sref="login"]'));
    };

    this.returnFlight = function () {
        return element(by.css('[type="radio"][value="return"]'));
    };

    this.oneWayFlight = function () {
        return element(by.css('[type="radio"][value="one-way"]'));
    };

    this.flightFrom = function () {
        return element(by.css('input[aria-labelledby="label-airport-selector-from"]'));
    };

    this.flightTo = function () {
        return element(by.css('input[aria-labelledby="label-airport-selector-to"]'));
    };

    this.choosePassengers = function () {
        return element(by.css('.dropdown-handle'));
    };

    this.addAdults = function () {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(0);
    };

    this.addTeens = function () {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(1);
    };

    this.addChildren = function () {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(2);
    };

    this.addInfants = function () {
        return element.all(by.css('[data-ref="core-inc-dec-increment"]')).get(3);
    };

    this.submit = function () { 
        return element(by.css('[translate="common.buttons.lets_go"]'));
    };

    this.chooseFlyOutDate = function (date) {
        return element(by.css('[data-id="'+date+'"]'));
    };

    this.chooseFlyBackDate = function (date) {
        return element(by.css('[data-id="'+date+'"]'));
    };

    this.alertMsg = function () {
        return element.all(by.css('[role="listbox"] [role="alert"]')).get(3);
    };

    this.flyingWithAnInfantAlertSubmit = function () {
        return element(by.css('[ng-transclude="dialogBodySlot"] .text-center.flight-search-dialog__footer .core-btn-primary'));
    };

    this.userDropdown = function () {
        return element.all(by.css('.username.ng-binding'));
    };

    this.logOut = function () {
        return element(by.css('[ui-sref="login"][ng-click="logout()"]'));
    };
    
    this.continueToSearch = function () {
        return element(by.css('.promo-popup-benefits.family button'));
    };
}

module.exports = HomePage;