const valorLower = 1
const valorHigher = 1000
const secretNumber =  genereteRandomNumber()

function genereteRandomNumber() {
    return parseInt(Math.random() * valorHigher + 1)
}

console.log(secretNumber)

const elementValorLower = document.getElementById('lower')
elementValorLower.innerHTML = valorLower

const elementValorHigher = document.getElementById('higher')
elementValorHigher.innerHTML = valorHigher
