function getInputValue(inputId) {
    const inputFeild = document.getElementById(inputId);
    const inputAmout = parseFloat(inputFeild.value);
    inputFeild.value = '';
    return inputAmout;
}
//get innerText
function getInnerTextValue(feildId) {
    const feildTag = document.getElementById(feildId);
    const feildText = feildTag.innerText;
    const value = parseFloat(feildText);
    return value;
}
function updateTotal(feildId, amount) {
    // const totalTag = document.getElementById(feildId);
    // const previousTotalText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalText);
    const previousTotal = getInnerTextValue(feildId);

    const newTotal = previousTotal + amount;
    document.getElementById(feildId).innerText = newTotal;

}
//update balance
function updateBalance(amount, isAdding) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceText);
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true) {
        newBalance = previousBalance + amount;
    }
    else {
        newBalance = previousBalance - amount;
    }

    document.getElementById('balance-total').innerText = newBalance;
}
//handle Deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = getInputValue('deposit-input');
    if (amount > 0) {
        updateTotal('deposit-total', amount);
        updateBalance(amount, true);
    }
})
//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = getInputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if (amount > 0 && amount <= balance) {
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
})