let btnNumber = document.querySelectorAll("#btnNumber");
let screen = document.querySelector("#screen");
let btnOpt = document.querySelectorAll("#btnOpt");
let optState = false;
let opt = "";
let final = 0;
let CE = document.querySelector("#CE");

CE.addEventListener("click",function(){
  screen.textContent = "0";
});



btnNumber.forEach(number => {
  number.addEventListener("click",showNumber);

  function showNumber(){
    if(screen.textContent == "0" || optState){
      screen.textContent = "";
    }
    screen.textContent += this.textContent;
    optState = false;
  }
});

btnOpt.forEach(operator => {
  operator.addEventListener("click",calculator);

  function calculator(){
    optState = true;
    let newOpt = this.textContent;

    switch (opt){
      case "+":
         screen.textContent = final + Number(screen.textContent);
      break;
      case "-":
        screen.textContent = final - Number(screen.textContent);
      break;
      case "*":
      screen.textContent = final * Number(screen.textContent);
      break;
      case "/":
      screen.textContent = final / Number(screen.textContent);
      break;
      case "=":
      final = Number(screen.textContent);
      break;
    }
    final = Number(screen.textContent);
    opt = newOpt;
  }
});