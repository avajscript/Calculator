window.addEventListener("DOMContentLoaded", (event) => {
  var buttonArray = [];
  var symbolArray = ["+", "-", "*", "/", "="];
  var clearState = false;
  function add() {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("output").innerHTML = num1 + num2;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
  }

  //Calculation
  function calculateValue(value) {
    document.getElementById("user-input").innerText = eval(value);
    clearState = true;
  }
  //Display value
  function displayValue(value) {
    if (document.getElementById("user-input").innerText == "0") {
      document.getElementById("user-input").innerText = value;
    } else {
      document.getElementById("user-input").innerText += value;
    }
  }
  //Recieves number/symbol from button clicks, sends to display
  function buttonClick(event) {
    var output = document.getElementById("user-input").innerText;
    value = event.target.id;
    value = value.slice(-1); // Recieves the last digit based on id

    if (/[0-9]/.test(value)) {
      if (clearState) {
        // clears screen
        document.getElementById("user-input").innerText = "";
        clearState = false;
      }
      // only runs if last digit was a number
    } else if (
      output.endsWith(".") &&
      output.charAt(output.length - 2 == ".")
    ) {
      return;
    } else {
      clearState = false;
      for (var i in symbolArray) {
        if (value == "=") {
          //Sends to calc func and outputs 0
          document.getElementById("user-input").innerText = "";
          calculateValue(output);

          return;
        }

        if (output.endsWith(symbolArray[i])) {
          // if string ends with symbol, breaks
          if (value == ".") {
          } else {
            return;
          }
        }
      }
    }

    displayValue(value);
  }

  // Add event listeners to buttons
  (function () {
    for (var i = 0; i <= 9; i++) {
      document
        .getElementById("btn-" + i)
        .addEventListener("click", buttonClick);
    }
  })();
  // Add event listeners to symbols
  (function () {
    for (var i in symbolArray) {
      document
        .getElementById(`btn-${symbolArray[i]}`)
        .addEventListener("click", buttonClick);
    }
  })();
  document.getElementById("btn-.").addEventListener("click", buttonClick);
});
