let ball = document.querySelector(".mode_ball");

ball.addEventListener("click", changeTheme);

let leftside = true;
function changeTheme (){
  if (leftside == true){
    ball.style.left = "40px";
    ball.style.backgroundColor = "#111";
    document.querySelector(".mode").style.backgroundColor = "#fff";
    document.querySelector("body").style.backgroundColor = "#111";
    leftside = false;
  }
  else {
    ball.style.left = "5px";
    document.querySelector(".mode").style.backgroundColor = "#111";
    document.querySelector("body").style.backgroundColor = "#fff";
    ball.style.backgroundColor = "#fff";
    leftside = true;
  }
}