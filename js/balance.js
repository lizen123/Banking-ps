/* Deposittttttt */


document.getElementById('deposit-button').addEventListener('click',function(){
   const depositInput = document.getElementById('input');
   const newAmount = depositInput.value;
   const depositAmount = document.getElementById('input-amount');
   const currentAmount = depositAmount.innerText;
   const newAmountTotal =parseFloat(depositAmount.innerText) +parseFloat (newAmount);
    depositAmount.innerText = newAmountTotal;
    const totalBalance = document.getElementById('total-balance');
    const currentBalance = totalBalance.innerText;
    const newBalance =parseFloat(totalBalance.innerText) + parseFloat(newAmount);
    totalBalance.innerText = newBalance;
    depositInput.value = '';
});
/* Withdrawwwwww */


document.getElementById('Withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('decrease-amount');
    const withdraNewAmount = withdrawInput.value;
    const withdrawAmount = document.getElementById('Withdraw-balance');
    const withdrawCurrentAmount = withdrawAmount.innerText;
    const newAmountTotalWithdraw =parseFloat(withdrawAmount.innerText) +parseFloat (withdraNewAmount);
     withdrawAmount.innerText = newAmountTotalWithdraw;
     const totalBalanceWithdraw = document.getElementById('total-balance');
     const currentBalance = totalBalanceWithdraw.innerText;
     const newBalancewithdraw =parseFloat(totalBalanceWithdraw.innerText) - parseFloat(withdraNewAmount);
     totalBalanceWithdraw.innerText = newBalancewithdraw;
     withdrawInput.value = '';
 });