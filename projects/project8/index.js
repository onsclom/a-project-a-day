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

  iq = 100
  iq += (sigmoid( (sum-5)*.1 )-.5)*300
  iq = Math.round(iq)
  iqText.innerHTML = `IQ: <b>${iq}</b>`
  iqText.style.display = "block";
}

function hide() {
  iqText.style.display = "none";
}

function sigmoid(t) {
  return 1/(1+Math.pow(Math.E, -t));
}