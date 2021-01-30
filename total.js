// step-1 first class ticket 


// First-class ticket price count With Event ID And Event 

/*
// Increment  for first-Class Input

document.getElementById("ticket-increment").addEventListener("click", () => {
    const ticketInput = document.getElementById("first-input");
    const ticketCount = parseInt(ticketInput.value);
    const ticketNewCount = ticketCount + 1;
    ticketInput.value = ticketNewCount;

    const ticketTotal = 150 * ticketNewCount
    console.log(ticketTotal);

})

// Decrement for first-Class Input

document.getElementById("ticket-decrement").addEventListener("click", () => {
    const ticketInput = document.getElementById("first-input");
    const ticketCount = parseInt(ticketInput.value);
    const ticketNewCount = ticketCount - 1;
    ticketInput.value = ticketNewCount;

    const ticketTotal = 150 * ticketNewCount
    console.log(ticketTotal);

})
*/


/*
// call function See Outpoot first Class ticket

document.getElementById("ticket-increment").addEventListener("click", () => {
    firstClassTicket(true);
});
document.getElementById("ticket-decrement").addEventListener("click", () => {
    firstClassTicket(false);
});

*/



// Use Of function for First Class Ticket Count

/*

function firstClassTicket(isIncrease) {
    const ticketInput = document.getElementById("first-input");
    const ticketCount = parseInt(ticketInput.value);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    ticketInput.value = ticketNewCount;


    const firstClassTotal = 150 * ticketNewCount

    console.log(firstClassTotal);
}

*/

// step-2 EconomyTicket 


// Economy ticket price count With Event ID And Event

/*

// Increment for Economy Input

document.getElementById("economy-increment").addEventListener("click", () => {
    const ticketInput = document.getElementById("second-input");
    const ticketCount = parseInt(ticketInput.value);
    const ticketNewCount = ticketCount + 1;
    ticketInput.value = ticketNewCount;

    const ticketTotal = 100 * ticketNewCount
    console.log(ticketTotal);

}) */


/*
// Decrement for Economy Input
document.getElementById("economy-decrement").addEventListener("click", () => {
    const ticketInput = document.getElementById("second-input");
    const ticketCount = parseInt(ticketInput.value);
    const ticketNewCount = ticketCount - 1;
    ticketInput.value = ticketNewCount;

    const ticketTotal = 100 * ticketNewCount
    console.log(ticketTotal);

})

*/

// call function See Outpoot Econmy Class ticket


/*
document.getElementById("economy-increment").addEventListener("click", () => {
    economyTicket(true);
})

document.getElementById("economy-decrement").addEventListener("click", () => {
    economyTicket(false);
})

*/

// Use Of function for Economy Class Ticket Count

/*

function economyTicket(isEco) {
    const Input = document.getElementById("second-input");
    const ticketCount = parseInt(Input.value);

    let ticketNewCount = ticketCount;
    if (isEco == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isEco == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    Input.value = ticketNewCount;


    const economyTotal = 100 * ticketNewCount

    console.log(economyTotal);
}

*/


// Two FUnction Merge In One Function 

function handlerOfTicket(selectOfTicket, isIncrease) {
    const ticketInput = document.getElementById(selectOfTicket + "-input");
    const ticketCount = parseInt(ticketInput.value);

    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    ticketInput.value = ticketNewCount;

    let economyTotal = 0;
    if (selectOfTicket == "first") {
        economyTotal = 150 * ticketCount;
    }
    if (selectOfTicket == "second") {
        economyTotal = 100 * ticketCount;
    }


    totalPrice();
}


// Total And Book Now Ticket 


// total Ticket Price
/* 
function totalPrice() {
    const premiumClass = document.getElementById("first-input");
    const inputNum1 = parseInt(premiumClass.value);

    const midClass  = document.getElementById("second-input");
    const inputNum2 = parseInt(midClass .value);

    const totaLPrice = inputNum1 * 150 + inputNum2 * 100;
    document.getElementById("sub-total").innerText = "$" + totaLPrice;
    // console.log(totaLPrice);

}

*/

function totalPrice() {

    const premiumClass = getValue('first');
    const midClass = getValue('second');

    const total = (premiumClass * 150) + (midClass * 100);
    document.getElementById("sub-total").innerText = total;

    const TexOfBd = Math.round((total * 0.1));
    document.getElementById('ticket-VAT').innerText = TexOfBd;

    const grandTotal = total + TexOfBd;
    document.getElementById("total-Price").innerText = grandTotal;





    // This code Use Of Thank You Section When User Click Book Now   




    const firstClassTicket = premiumClass;
    const firstTicTotal = premiumClass * 150;
    document.getElementById("first-class").innerText = "Your First Class ticket Is : " + firstClassTicket + ' = ' + "$" + firstTicTotal;

    const economyTicket = midClass;
    const EconomyTotal = midClass * 100;
    document.getElementById("second-class").innerText = "Your Economy ticket Is : " + economyTicket + ' = ' + "$" + EconomyTotal;

    document.getElementById("Tex").innerText = "VAT 10% : " + "$" + TexOfBd;
    document.getElementById("Your-SubTotal").innerText = "Total Ticket Price  : " + "$" + grandTotal;


    const Book = document.getElementById("submit-btn");
    Book.addEventListener("click", () => {

        if (grandTotal > 1) {
            const bookingArea = document.getElementById("booking-aria");
            bookingArea.style.display = "none";

            const enter = document.getElementById("confirmation-aria");
            enter.style.display = "block";
        }

    })

    // validation Number cannot be set 0 

    if (grandTotal == 0 ) {
        alert("Invaild Number!  You Can't Set Zero.")
        return false
    }

}



// diffarent class ticket buy to  diffarent uses.  

function getValue(item) {
    const itemInfo = document.getElementById(item + '-input');
    const itemCount = parseInt(itemInfo.value);
    return itemCount;
}
