function compute() {
  var principal = document.getElementById("principal").value;
    If(parseInt(principal) < 1 ) {
      alert("Please enter a positive value");
      document.getElementById("principal").focus();
      return;
      }

  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = principal * rate * years / 100;
  var year = new Date().getFullYear()+parseInt(years);
  document.getElementbyID("result").innerText = "If you Deposit "+principal+", \<br>\ at an interest rate of "+rate+"%. \<br> You will receive an amount of "+interest+", \<br>\ in the year "+year+". \<br>"
  }
  
function UpdateRate() {
    var rate = document.getElementById("rate").value;
    document.getElementbyID("ratevalue").innerText = rate;
  }


