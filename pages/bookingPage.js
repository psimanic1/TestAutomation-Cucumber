var BookingPage = function () {
    this.bookingPrice = function () {
        return element.all(by.css('.ng-scope.ng-isolate-scope .flights-table-price .core-btn-primary')).get(1);
    };

    this.chooseStandardFare = function () {
        return element.all(by.css('.core-btn-primary.fare-select')).get(0);
    };
    
    this.continueWithBooking = function () {
        return element.all(by.id('continue'));
    };
    
}
module.exports = BookingPage;