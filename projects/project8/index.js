let paragraph = document.getElementById("paragraph");
let submit = document.getElementById("submit");
let iqText = document.getElementById("iqText");

submit.addEventListener("click", submit_pressed)
paragraph.addEventListener("input", hide)
function submit_pressed() {
  let sum = 0;
  for (let word of paragraph.value.trim().split(" ")) {
    sum += word.length;
  }
  sum /= paragraph.value.trim().split(" ").length
  
  let sign = sum-5<0 ? -1 : 1

  iq = 100 + Math.log( Math.abs( (sum-5)*100000000000000000 ) ) * sign
  iq = Math.round(iq)
  iqText.innerHTML = `IQ: <b>${iq}</b>`
  iqText.style.display = "block";

  
}

function hide() {
  iqText.style.display = "none";
}