// let t34Cursor = document.getElementById('t34')
// let catCursor = document.getElementById('cat')
// let animeCursor = document.getElementById('kanna')
// let resetCursor = document.getElementById('reset')
// t34Cursor.addEventListener('mouseenter', ()=>{
//     document.getElementById('body').style.cursor = `url('./7924_t34tank.png'), auto`
//     console.log('event')
// })
// catCursor.addEventListener('mouseenter', ()=>{
//     document.getElementById('body').style.cursor = `url('./6764_sovietbop.gif'), auto`
//     console.log('event')
// })
// animeCursor.addEventListener('mouseenter', ()=>{
//     document.getElementById('body').style.cursor = `url('./SovietKanna.png'), auto`
//     console.log('event')
// })
// resetCursor.addEventListener('click', ()=>{
//     document.getElementById('body').style.cursor = `unset`
//     console.log('event')
// })

const cursors = [
    './cursor1.png',
    './cursor2.png',
    './cursor3.png',
    './cursor4.png'
]
const bodyEl = document.getElementsByTagName('body')[0]
const selectionContEl = document.getElementById('selections')

for (let url of cursors){
    selectionContEl.innerHTML += `
    <img src='${url}' class='select-item' style='cursor: url(${url}), auto'>`
}

const selectItemEls = document.getElementsByClassName('select-item')
console.log(selectItemEls)

for (let selectItemEl of selectItemEls){
    selectItemEl.addEventListener('click', ()=>{
        bodyEl.style.cursor = selectItemEl.style.cursor
    })
}