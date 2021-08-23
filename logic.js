//variables for all tickets

const FirstClassTicketIncreaseBtn = document.getElementById('first-class-ticket-increase');
const FirstClassTicketDecreaseBtn = document.getElementById('first_class-ticket-decrease');
const EconomyClassTicketIncreaseBtn = document.getElementById('economy-class-ticket-increase');
const EconomyClassTicketDecreaseBtn = document.getElementById('economy-class-ticket-decrease');

//ButtonFor Increase Decrease EventListener--loader
FirstClassTicketIncreaseBtn.addEventListener('click', function() {
    handlerTicketChange('first-class-ticket-Input', true, false);
});
FirstClassTicketDecreaseBtn.addEventListener('click', function() {
    handlerTicketChange('first-class-ticket-Input', false, false)
});
EconomyClassTicketIncreaseBtn.addEventListener('click', function() {
    handlerTicketChange('economy-class-ticket-Input', true, true)
});
EconomyClassTicketDecreaseBtn.addEventListener('click', function() {
    handlerTicketChange('economy-class-ticket-Input', false, true)
});



//eventFunction

function handlerTicketChange(id, isIncrease, isEconomic) {
    const ticketInput = document.getElementById(id);
    const ticketCount = parseInt(ticketInput.value);

    //NewTicketCount =ticketCount+1;
    let NewTicketCount = 0;
    if (isIncrease == true) {
        NewTicketCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        NewTicketCount = ticketCount - 1;
    }
    document.getElementById(id).value = NewTicketCount;
    //TicketPrice
    let NewTicketPrice = 0;
    if (isEconomic == false) {
        NewTicketPrice = NewTicketCount * 150;
    }
    if (isEconomic == true) {
        NewTicketPrice = NewTicketCount * 100;
    }
    //function call
    calculationTotal();
    //DocumentTimeline.getElementById(id).value = NewTicketPrice; 
}

function calculationTotal() {
    const FirstClassCount = getInputValue('first-class-ticket-Input');
    const EconomyClassCount = getInputValue('economy-class-ticket-Input');

    const TotalTicketPrice = FirstClassCount * 150 + EconomyClassCount * 100;
    document.getElementById('SubTotalTicketPrice').innerText = '$' + TotalTicketPrice;

    //tax
    const TotalTaxAmount = TotalTicketPrice * 0.1;
    document.getElementById('vatTotal').innerText = TotalTaxAmount;

    //GrandTotal
    const TotalGrandAmount = TotalTicketPrice + TotalTaxAmount;
    document.getElementById('grandTotal').innerText = TotalGrandAmount;


}

function getInputValue(id) {
    const ClassInput = document.getElementById(id);
    const ClassCount = parseInt(ClassInput.value);
    return ClassCount;
}