/**********
Date: 6/12/2023
Author: Allister Bell Jr
Class: CITW 165
Exercise: Exercise 4
**********/
(function () {
    // Create a product object using object literal syntax
    var product = {
        name: "Rick's Simple Wafers",
        productRate: 130, // Amount in dollars/Schmeckles
        discount: 10,  // Percentage discount
        offerprice: function () {
            var offerRate = this.productRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    }

    // Write out the product name, standard rate, and the special rate
    var productName, productRate, percentageDiscount;                // Declare variables
    productName = document.getElementById('productName');            // Get elements
    productRate = document.getElementById('productRate');
    percentageDiscount = document.getElementById('percentageDiscount');

    productName.textContent = product.name;                          // Write product name
    productRate.textContent = '$' + product.productRate.toFixed(2);  // Write product rate
    percentageDiscount.textContent = '$' + product.offerprice();     // Write offer price


    // PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
    var expiryMsg; // Message displayed to users
    var today;     // Today's date
    var elEnds;    // The element that shows the message about the offer ending

    function offerExpires(today) {
        // Declare variables within the function for local scope
        var weekFromToday, day, date, month, year, dayNames, monthNames;

        // Add 7 days time (added in milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        // Create arrays to hold the names of days / months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];

        // Collect the parts of the date to show on the page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        // Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }
    today = new Date();                             // Put today's date in variable
    elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
    elEnds.innerHTML = offerExpires(today);         // Add the expiry message
    // Note: textContent does not work in IE8, use innerHTML instead
    // finish the immediately invoked function expression
}());
