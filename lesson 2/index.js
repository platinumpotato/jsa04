//#region get element

//by id
const h1El = document.getElementById('hello')
// console.log(h1El)

//by class
// const h1HiClass = document.getElementsByClassName('hi')
// console.log(h1HiClass);
// h1HiClass[0].innerHTML = 'hello'
// h1HiClass[1].style.color = 'orange'
// h1HiClass[1].style.fontSize = '50px'
// h1HiClass[2].innerHTML = `hi 
// <h2>bye</h2>`

//#endregion

//#region string template (`)
a = 1
console.log(`i have ${a} ${a===1 ? 'apple' : 'apples'}`);
// ${condition ? if true : if false}
//#endregion

//#region event listener
// let clicks = 0
// h1El.addEventListener('click', () => {
//     clicks++
//     h1El.innerText = `you clicked ${clicks} time(s)`
// })
//#endregion

//#region how 2 functions
// function add(a, b) {
//     return a + b
// }
// console.log(add(1, 5))
// const add = (a, b) => {
//     return a + b
// }
// const add = (a,b) => a + b
//#endregion

//hw
//+ and - buttons
//max = 10 and min = 0 (đến 10 thì về 0, đến 0 thì lên 10)
//change color button: when click, counter number change to random color
//generate random rgb color by getting 3 random colors
//Math.floor

let color = document.getElementById('color')
let plusBtn = document.getElementById('+')
let minusBtn = document.getElementById('-')
let number = document.getElementById('number')
let numberValue = 0

function numberChange() {
    if (numberValue == 10) {
        number.innerText = numberValue = -1
    }
    number.innerText = numberValue = numberValue + 1
}
function numberChange2() {
    if (numberValue == 0) {
        number.innerText = numberValue = 11
    }
    number.innerText = numberValue = numberValue - 1
}
plusBtn.addEventListener('click', numberChange)
minusBtn.addEventListener('click', numberChange2)
function colorChange(){
    let blue = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let red = Math.floor(Math.random()*256)
    number.style.color = `rgb(${red}, ${green}, ${blue})`
}
color.addEventListener('click', colorChange)