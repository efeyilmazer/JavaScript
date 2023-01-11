const bg = document.querySelector(".bg")
const loadText = document.querySelector(".loading-text")

let load = 0

let int = setInterval(blurring, 1)

function blurring() {
  load++
  if(load > 99) {
    clearInterval(int)
  }
  loadText.innerText=`${load}%`
  loadText.style.opacity= scale(load, 0, 100 ,1 ,0)
  bg.style.filter=`blur(${scale(load, 0, 100, 30, 0)}px)`
}



//Stackoverflow'dan destek aldım. (Görünürden görünmeze doğru gitmesini sağlıyor)
const scale =(num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}