// ------------------
// Part 1: Basics
// ------------------
function checkAge() {
  let age = prompt("Enter your age:"); // get user input
  age = parseInt(age);

  if (age >= 18) {
    document.getElementById("ageResult").innerText = "You are an adult.";
  } else {
    document.getElementById("ageResult").innerText = "You are a minor.";
  }
}

// ------------------
// Part 2: Functions
// ------------------
function calculateTotal(quantity, price) {
  let total = quantity * price;
  document.getElementById("totalResult").innerText = "Total cost: $" + total;
  return total; // return for reusability
}

function formatString(str) {
  return str.toUpperCase();
}
console.log(formatString("hello world")); // Example usage

// ------------------
// Part 3: Loops
// ------------------
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit)); // loop example

// ------------------
// Part 4: DOM Manipulation
// ------------------
document.getElementById("toggleBtn").addEventListener("click", function() {
  let message = document.getElementById("message");
  if (message.style.display === "none") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
});
