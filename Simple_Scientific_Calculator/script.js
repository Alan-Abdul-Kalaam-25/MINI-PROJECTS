let display = document.getElementById("result");

function appendToDisplay(value) {
  const lastChar = display.value.slice(-1);
  const operators = ["+", "-", "*", "/", "."];

  // Prevent multiple operators in a row
  if (operators.includes(value) && operators.includes(lastChar)) {
    return;
  }

  if (value === "×") {
    value = "*";
  }

  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function toggleCalculator() {
  if (window.location.pathname.includes("/scientific/scientific.html")) {
    window.location.href = "../index.html";
  } else {
    window.location.href = "./scientific/scientific.html";
  }
}

window.onload = function () {
  let toggleBtn = document.getElementById("toggleBtn");
  if (window.location.href.includes("scientific.html")) {
    toggleBtn.innerHTML = '<i class="fas fa-calculator"></i>';
  } else {
    toggleBtn.innerHTML = '<i class="fas fa-square-root-alt"></i>';
  }
  document.addEventListener("keydown", handleKeyPress);
};

function handleKeyPress(event) {
  const key = event.key;
  const validKeys = "0123456789+-*/().";
  const specialKeys = {
    Enter: "=",
    Backspace: "C",
    Delete: "C",
    c: "C",
    C: "C",
  };

  if (validKeys.includes(key)) {
    appendToDisplay(key);
  } else if (key in specialKeys) {
    if (specialKeys[key] === "=") {
      calculate();
    } else if (specialKeys[key] === "C") {
      clearDisplay();
    }
  }

  event.preventDefault();
}
