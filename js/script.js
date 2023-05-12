const buttonPlus = document.getElementById('plus')
const buttonMinus = document.getElementById('minus')
const buttonMultiply = document.getElementById('multiply')
const buttonDivide = document.getElementById('divide')
const buttonEqual = document.getElementById('equal')
const buttonClear = document.getElementById('clear')

let num1 = document.querySelector('.num1')
let num2 = document.querySelector('.num2')
let num3 = 0
let result = document.querySelector('.result')

buttonPlus.addEventListener('click', () => {
    num3 = parseInt(num1.value) + parseInt(num2.value)
})

buttonMinus.addEventListener('click', () => {
    num3 = parseInt(num1.value) - parseInt(num2.value)
})

buttonMultiply.addEventListener('click', () => {
    num3 = parseInt(num1.value) * parseInt(num2.value)
})

buttonDivide.addEventListener('click', () => {
    num3 = parseInt(num1.value) / parseInt(num2.value)
})

buttonEqual.addEventListener('click', () => {
    result.innerText = `Результат = ${num3}`
})

buttonClear.addEventListener('click', () => {
    result.innerText = `Результат = 0`
})