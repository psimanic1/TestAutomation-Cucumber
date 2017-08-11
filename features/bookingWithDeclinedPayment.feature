#features/bookingWithDeclinedPayment.feature 

Feature: Booking with declined payment 
         As a loged user on Ryanair
         When I book a flight
         And enter card details info
         Then I should get payment declined message 
         
Scenario Outline:
         Given I make a booking from "<flightFrom>" to "<flightTo>" on "<flightDate>" for "<numOfAdults>" adults and "<numOfChilds>" childs and "<numOfTeens>" and "<numOfInfants>" infants
         And I choose booking options with standard fare
         And I "<choose>" seats
         When I pay for booking with card details “<cardNumber>", “10/2020” and “265”
         Then I should get payment declined message 

Examples:
|flightFrom|flightTo|flightDate|numOfAdults|numOfChilds|numOfTeens|numOfInfants|cardNumber|choose|
|DUB|SXF|20-09-2017|2|0|0|3|5555555555554444|don't choose|