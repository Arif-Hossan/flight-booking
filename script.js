let firstClassPrice = 150;
let economyClassPrice = 100;

function handleTicketChange(ticketClass, isChange) {
  let firstClassCount = document.getElementById(ticketClass + "-count");
  let firstClassNumber = parseInt(firstClassCount.value);
  let firstClassNewCount = firstClassNumber;
  if (isChange == true) {
    firstClassNewCount = firstClassNumber + 1;
  }
  if (isChange == false && firstClassNumber > 0) {
    firstClassNewCount = firstClassNumber - 1;
  }
  document.getElementById(ticketClass + "-count").value = firstClassNewCount;
}

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
