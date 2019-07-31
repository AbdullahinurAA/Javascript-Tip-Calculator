
// 1. Get value of input
function tipCalculator() {
    var totalBill = document.querySelector('#totalBill').value;
    var tip = document.querySelector('#output');
    var serviceQ = document.querySelector('#serviceQuality').value;
    
    var calculatedTip = totalBill * serviceQ; 
    tip.innerHTML = calculatedTip + " " + "Ksh";
    console.log(calculatedTip); 
}

