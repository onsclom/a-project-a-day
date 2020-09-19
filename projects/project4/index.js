const synth = new Tone.Synth();
synth.oscillator.type = "sine";
synth.envelope.release = 50/20;
// connect it to the master output (your speakers)
synth.toMaster();

function clicked(num) {
  synth.triggerAttackRelease("C4", "8n");
}

let rangeInput = document.getElementById("release");
let Sine = document.getElementById("Sine");
let Triangle = document.getElementById("Triangle");

rangeInput.addEventListener('mouseup', function() {
    synth.envelope.release = this.value/20;
});

Sine.addEventListener('click', function() {
  synth.oscillator.type = "sine";
});
Triangle.addEventListener('click', function() {
  synth.oscillator.type = "triangle";
});

