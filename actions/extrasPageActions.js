var extrasPageActions = function () {
    this.chooseSeats = function (seats) {
        pages.extrasPage.checkOut().click();
        if (seats === "choose") {
            pages.extrasPage.chooseMySeat().click();
            return this.choosingASeats();
        }
        else {
            browser.sleep(300);
            return pages.extrasPage.okThanksButton().click();
        }
    };

    this.choosingASeats = function () {
        browser.sleep(1000);
        var seatsForInfants1 = [7, 9, 11, 13];
        var seatsForInfants2 = [8, 10, 12, 14];
        var randomSeat1 = seatsForInfants1[Math.floor(Math.random() * seatsForInfants1.length)];
        seatsForInfants1 = this.removeItem(seatsForInfants1, randomSeat1);
        console.log(seatsForInfants1);
        var randomSeat2 = seatsForInfants2[Math.floor(Math.random() * seatsForInfants2.length)];
        browser.executeScript('window.scrollTo(1210,143);').then(function () {
            pages.extrasPage.prioritySeats(randomSeat1).click().then(function () {
                console.log("Choosing seat num " + randomSeat1 + " for first infant and adult");
            });
        });
        browser.executeScript('window.scrollTo(1210,143);').then(function () {
            pages.extrasPage.prioritySeats(randomSeat2).click().then(function () {
                console.log("Choosing seat " + randomSeat2 + " for second infant and adult");
            });
        });
        browser.sleep(500);
        pages.extrasPage.nextButton().click();
        browser.sleep(500);
        pages.extrasPage.confirmSeats().click();
        browser.sleep(500);
        return pages.extrasPage.checkOut().click();
    };

    this.removeItem = function (array, value) {
        var b = '';
        for (b in array) {
            if (array[b] === value) {
                array.splice(b, 1);
                break;
            }
        }
        return array;
    };
    
};
module.exports = extrasPageActions;