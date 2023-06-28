const elementBet = document.getElementById('bet')

//window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    bet = e.results[0][0].transcript
    showBet(bet)
    checkTrueBet(bet)
    console.log(e)

}

function showBet(bet) {
    elementBet.innerHTML = `
        <div>Você falou</div>
        <span class="box">${bet}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())
