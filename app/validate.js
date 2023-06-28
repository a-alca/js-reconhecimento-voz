function checkTrueBet(bet) {
    const number = +bet

    if (invalidBet(number)) {
        elementBet.innerHTML += `
        <div>Estamos brincando com números, bb...</div>
        `
        return
    }

    if (HigherOrLower(number)) {
        elementBet.innerHTML += `
        <div>Oxe!!! O número é entre ${valorLower} e ${valorHigher},amore</div>
        `
        return
    }

    if (number === secretNumber) {
        document.body.innerHTML = `
            <h2>Acertou, bicha!</h2>
            <h3>É o ${secretNumber} mesmo, uaaaa!!</h3>

            <button id="try-again" class="btn-again">Jogar novamente</button>
        `
    } else if (number > secretNumber) {
        elementBet.innerHTML += `
        <div>Mas o número secreto é menor <i class="fa-thin fa-down-long"></i></div>
        `
    } else {
        elementBet.innerHTML += `
        <div>Mas o número secreto é maior <i class="fa-thin fa-up-long"></i></div>
        `
    }
}

function invalidBet(number) {
    return Number.isNaN(number)
}
function HigherOrLower(number) {
    return number > valorHigher || number < valorLower
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'try-again') {
        window.location.reload()
    }
})
