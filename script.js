function compute() {
  var amount = document.getElementById("amount").value {
    If(parseInt(amount) <1){
      alert("Please enter a positive value");
      document.getElementById("amount").focus();
      return;
    }
  var rate = document.getElementById("rate").value;
  var years = document.getElementById("years").value;
  var interest = amount * rate * years /100;
  var year = new Date().getFullYear()+parseInt(years);
  document.getElementbyID("result").innerHTML ="If you Deposit "+Amount+", \<br>\ at an interest rate of "+rate+"%. \<br> You will receive an amount of "+interest+", \<br>\ in the year "+year+". \<br>"
  }
  
  function UpdateRate() {
    var ratevalue = document.getElementById("rate").value;
    document.getElementbyID("ratevalue").innerHTML=ratevalue;
  }
  

  
  
