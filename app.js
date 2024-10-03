const AMOUNT_ENTERD = document.getElementById('Amount');
const OPTIONS = document.querySelectorAll('input[name = "%"]');
const NumberOfPeople = document.getElementById('people');
const AMOUNT_PAY = document.getElementsByClassName('out-Amount')[0];
const AMOUNT_TOTAL = document.getElementsByClassName('out-total')[0];
const ERROR_MSG = document.getElementsByClassName('error-hint')[0];
const BTN_RESET = document.querySelector('button[type = "reset"]');
let optionValue;
let peopleValue;
let billValue

console.log(AMOUNT_PAY)

AMOUNT_ENTERD.addEventListener('input', () => {
    billValue = parseFloat(AMOUNT_ENTERD.value);
    calculateTip();
})
OPTIONS.forEach(option => {
    option.addEventListener('input', () => {
        optionValue = parseFloat(option.value) / 100 ;
        console.log(optionValue);
        calculateTip();
    })
})
NumberOfPeople.addEventListener('input', () => {
    peopleValue = parseFloat(NumberOfPeople.value);
    if (peopleValue === 0) {
        NumberOfPeople.classList.add("error")
        ERROR_MSG.style.display = 'inherit';
    } else {
        NumberOfPeople.classList.remove("error")
        ERROR_MSG.style.display = 'none'; 
    }
    calculateTip();
})
function calculateTip() {
    if (peopleValue > 0 && billValue > 0 && optionValue > 0) {
        let tipAmount = (billValue * optionValue) ;
        let totalAmount = billValue * optionValue * peopleValue;

        AMOUNT_PAY.innerHTML = tipAmount.toFixed(2);  // Tip per person
        AMOUNT_TOTAL.innerHTML = totalAmount.toFixed(2);  // Total per person
    }
}

BTN_RESET.addEventListener('click', () => {
    document.forms[0].reset();
    AMOUNT_PAY.innerHTML = "$0.00"
    AMOUNT_TOTAL.innerHTML = "$0.00"
})