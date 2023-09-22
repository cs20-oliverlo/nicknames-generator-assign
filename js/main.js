// TRAVERSE DATA CYU ASSIGNMENT START CODE

// Load Data From Files
let nicknameData;
fetch("data/nicknames-list.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (nicknameData = strData.split(/\r?\n/)));


// Output Element Variable
let outputEl = document.getElementById("output");
let firstNameIn = document.getElementById("firstNameInEl").value;
let lastNameIn = document.getElementById("lastNameInEl").value;

// Button Event Listener
document.getElementById("allBtn").addEventListener("click", allBtnClicked);
document.getElementById("randBtn").addEventListener("click", randBtnClicked);

function allBtnClicked() {
  firstNameIn = document.getElementById("firstNameInEl").value;
  lastNameIn = document.getElementById("lastNameInEl").value;
  
  outputEl.innerHTML = ``;

  for (let i = 0; i < nicknameData.length; i++) {
    outputEl.innerHTML += `${i}: ${firstNameIn} "${nicknameData[i]}" ${lastNameIn} <br>`;
  }
}

function randBtnClicked() {
  firstNameIn = document.getElementById("firstNameInEl").value;
  lastNameIn = document.getElementById("lastNameInEl").value;

  outputEl.innerHTML = `${firstNameIn} "${nicknameData[randomInt(0, 3)]}" ${lastNameIn}`;
}