var extrasPage = function () {
    this.okGotItButton = function () {
        return element(by.css('.core-btn-primary.same-seats'));
    };

    this.chooseMySeat = function () {
        return element(by.css('.core-btn-primary.seat-prompt-popup-footer-btn'));
    };

    this.okThanksButton = function () {
        return element(by.css('.core-btn-ghost.seat-prompt-popup-footer-btn'));
    };

    this.checkOut = function () {
        return element(by.css('[data-ref="header-checkout-btn"]'));
    };

    this.prioritySeats = function (num) {
        return element.all(by.css('.seat-type-icon')).get(num);
    };

    this.nextButton = function () {
        return element(by.css('.core-btn-primary.next'));
    };
    
    this.confirmSeats = function () {
        return element(by.css('.core-btn-primary.next'));
    };
};
module.exports = extrasPage;