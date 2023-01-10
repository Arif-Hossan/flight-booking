let firstClassPrice = 150;
let economyClassPrice = 100;
function handleTicketChange(ticketClass, isChange) {
  //increment and decrement the ticket count
  let ticketNumber = getInputValue(ticketClass);
  let ticketNewCount = isChange
    ? ticketNumber + 1
    : ticketNumber > 0
    ? ticketNumber - 1
    : 0;
  document.getElementById(ticketClass + "-count").value = ticketNewCount;
  calculateTotal();
}
calculateTotal();
function calculateTotal() {
  let firstClassTicket = getInputValue("first-class");
  let economyClassTicket = getInputValue("economy-class");
  //calculate subtotal
  let subtotal = document.getElementById("subtotal");
  subtotal = firstClassTicket * firstClassPrice + economyClassTicket * economyClassPrice;
  document.getElementById("subtotal").innerText = subtotal;
  //tax
  let tax = document.getElementById("tax");
  tax = Math.round(subtotal * 0.1);
  document.getElementById("tax").innerText = tax;
  //total
  let total = document.getElementById("total");
  total = subtotal + tax;
  document.getElementById("total").innerText = total;
}
function getInputValue(ticketClass) {
  let ticketCount = document.getElementById(ticketClass + "-count");
  let ticketNumber = parseInt(ticketCount.value);
  return ticketNumber;
}

// function handleTicketChange(ticketClass, isChange) {
//   //increment and decrement the ticket count
//   let ticketCount = document.getElementById(ticketClass + "-count");
//   let ticketNumber = parseInt(ticketCount.value);
//   //   let firstClassNewCount = firstClassNumber;
//   //   if (isChange == true) {
//   //     firstClassNewCount = firstClassNumber + 1;
//   //   }
//   //   if (isChange == false && firstClassNumber > 0) {
//   //     firstClassNewCount = firstClassNumber - 1;
//   //   }
//   document.getElementById(ticketClass + "-count").value = ticketNewCount;
// }

// document
//   .getElementById("first-class-increase")
//   .addEventListener("click", function () {
//     let firstClassCount = document.getElementById("first-class-count");
//     let firstClassNumber = parseInt(firstClassCount.value);
//     let firstClassNewCount = firstClassNumber + 1;
//     document.getElementById("first-class-count").value = firstClassNewCount;
//   });

// document
//   .getElementById("first-class-decrease")
//   .addEventListener("click", function () {
//     let firstClassCount = document.getElementById("first-class-count");
//     let firstClassNumber = parseInt(firstClassCount.value);
//     let firstClassNewCount = firstClassNumber - 1;
//     document.getElementById("first-class-count").value = firstClassNewCount;
//   });
