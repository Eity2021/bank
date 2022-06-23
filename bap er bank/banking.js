// deposit btn

document.getElementById("deposit_btn").addEventListener("click", function () {
  //console.log("click");
  const deposit = document.getElementById("user_deposit");
  const depositAmount = deposit.value;
  //console.log(depositAmount);

  const totalAmount = document.getElementById("deposited_amount");
  const PreviousAmount = totalAmount.innerText;
  const newDepositAmount =
    parseFloat(PreviousAmount) + parseFloat(depositAmount);
  totalAmount.innerText = newDepositAmount;
  //clear the input field
  deposit.value = "";

  //    balance

  const balanceTotal = document.getElementById("balance");
  const showTotal = balanceTotal.innerText;
  const balanceAdding = parseFloat(showTotal);
  const newBalance = balanceAdding + newDepositAmount;
  //console.log(newBalance)
  balanceTotal.innerText = newBalance;
});

// withdraw

document.getElementById("withdraw_btn").addEventListener("click", function () {
  const withdraw = document.getElementById("withdraw_input");
  const withdrawAmountText = withdraw.value;
  const newWithdrawAmount = parseFloat(withdrawAmountText);
  console.log(newWithdrawAmount);

  const withdrawTotal = document.getElementById("withdraw_amount");
  const previousWithdrawText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawText);
  const newWithdraw = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotal.innerText = newWithdraw;

  withdraw.value = "";

  const balanceTotal = document.getElementById("balance");
  const showTotal = balanceTotal.innerText;
  const balanceAdding = parseFloat(showTotal);
  const newBalance = balanceAdding - newWithdraw;
  //console.log(newBalance)
  balanceTotal.innerText = newBalance;
});
