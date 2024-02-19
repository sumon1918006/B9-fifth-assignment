// click Buy ticket button to scroll the target section
function scrolling() {
  const targetSction = document.getElementById("main-part");

  // scroll to the target section
  targetSction.scrollIntoView({ behavior: "smooth" });
}

// decrease total seat number
function totalSeatDecrease(elementId) {
  let totalSeatDecrease = document.getElementById(elementId);
  let totalSeatText = totalSeatDecrease.innerText;
  let totalSeatNumber = parseInt(totalSeatText);
  totalSeatNumber = totalSeatNumber - 1;
  totalSeatDecrease.innerText = totalSeatNumber;
}

// increase select seat number
function increaseSelectSeat(elementId) {
  let totalSelectSeat = document.getElementById(elementId);
  let totalSelectSeatNumber = parseInt(totalSelectSeat.innerText);
  totalSelectSeatNumber = totalSelectSeatNumber + 1;
  totalSelectSeat.innerText = totalSelectSeatNumber;
}

// set button background color
function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-nav-bus");
}

// find the number of innerChild
function innerChildNumber(elementId) {
  const targetSection = document.getElementById(elementId);
  const numberOfElement = targetSection.children.length;
  return numberOfElement;
}

// append new child in col2
function appendNewChild(elementId, elementValue) {
  const setNewValueSection = document.getElementById(elementId);
  // add new element
  const addedSeat = document.createElement("div");

  const p1 = document.createElement("p");
  p1.innerText = elementValue;
  addedSeat.appendChild(p1);

  const p2 = document.createElement("p");
  p2.innerText = "Economoy";
  addedSeat.appendChild(p2);

  const p3 = document.createElement("p");
  p3.innerText = "550";
  addedSeat.appendChild(p3);

  setNewValueSection.appendChild(addedSeat);

  //added style
  addedSeat.style.display = "flex";
  addedSeat.style.justifyContent = "space-between";
}

// set total price
function setTotalPrice(elementId, elementValue) {
  let findTotalPrice = 550;
  findTotalPrice = findTotalPrice + elementValue * 550;
  //set total price
  const totalPriceElement = document.getElementById(elementId);
  totalPriceElement.innerText = findTotalPrice;
}

// set grand Total price
function grandTotalPrice(grandPrices, totalPrices) {
  //total Price
  const totalPriceElement = document.getElementById(totalPrices);
  const totalPrice = totalPriceElement.innerText;
  // grand total price
  const totalGrandPriceElement = document.getElementById(grandPrices);
  totalGrandPriceElement.innerText = totalPrice;
}
