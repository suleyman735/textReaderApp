const textDisplay = document.querySelector('#text');
const speedBtn    = document.querySelector('#speed')
const readBtn     = document.querySelector('.read')
const pauseBtn    = document.querySelector('.pause')
const stopBtn     = document.querySelector('.stop')

let CurrentChar;

//reading Functionality

readBtn.addEventListener('click', function () {
    readText(textDisplay.value)    
})

// pausing functionality
pauseBtn.addEventListener('click', pauseText);

// Stopping Functionlayy
stopBtn.addEventListener('click', stopText);

//speed Functionality
speedBtn.addEventListener('input', function () {
    stopText();
    readText(utterance.text.substring(CurrentChar));    
})

const utterance = new SpeechSynthesisUtterance();
utterance.addEventListener('end', function () {
    textDisplay.disabled = false;    
})

utterance.addEventListener('boundary',function (e) {
    CurrentChar = e.charIndex;   
})



//readTextfunction
function readText(testText) {
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume();
    }
    if (speechSynthesis.speaking) return;
    utterance.text = testText
    utterance.rate = speedBtn.value || 1;
    textDisplay.disabled = true;
    speechSynthesis.speak(utterance);
        
}

//pause Text fynction

function pauseText() {
    if (speechSynthesis.speaking) speechSynthesis.pause();
}

// StopText funkc

function stopText() {
  speechSynthesis.resume();
  speechSynthesis.cancel();   
}



// const textDisplay = document.querySelector("#text");
// const speedBtn = document.querySelector("#speed");
// const readBtn = document.querySelector(".read");
// const pauseBtn = document.querySelector(".pause");
// const stopBtn = document.querySelector(".stop");
// let currentChar;

// // Rreading Functionality
// readBtn.addEventListener("click", function () {
//   readText(textDisplay.value);
// });

// // Pausing Functionality
// pauseBtn.addEventListener("click", pauseText);

// // Stopping Functionality
// stopBtn.addEventListener("click", stopText);

// // Speed Input Functionality
// speedBtn.addEventListener("input", function () {
//   stopText();
//   readText(utterance.text.substring(currentChar));
// });

// /*
// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance
// */
// const utterance = new SpeechSynthesisUtterance();
// utterance.addEventListener("end", function () {
//   textDisplay.disabled = false;
// });

// utterance.addEventListener("boundary", function (e) {
//   currentChar = e.charIndex;
// });

// // readText Function
// function readText(testText) {
//   if (speechSynthesis.paused && speechSynthesis.speaking) {
//     return speechSynthesis.resume();
//   }

//   if (speechSynthesis.speaking) return;

//   utterance.text = testText;
//   utterance.rate = speedBtn.value || 1;
//   textDisplay.disabled = true;
//   speechSynthesis.speak(utterance);
// }

// // pauseText Function
// function pauseText() {
//   if (speechSynthesis.speaking) speechSynthesis.pause();
// }

// // stopText Function
// function stopText() {
//   speechSynthesis.resume();
//   speechSynthesis.cancel();
// }
