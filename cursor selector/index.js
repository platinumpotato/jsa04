let t34Cursor = document.getElementById('t34')
let catCursor = document.getElementById('cat')
let animeCursor = document.getElementById('kanna')
let resetCursor = document.getElementById('reset')

console.log(document.getElementById('body'))

t34Cursor.addEventListener('mouseenter', ()=>{
    document.getElementById('body').style.cursor = `url('./7924_t34tank.png'), auto`
    console.log('event')
})
catCursor.addEventListener('mouseenter', ()=>{
    document.getElementById('body').style.cursor = `url('./6764_sovietbop.gif'), auto`
    console.log('event')
})
animeCursor.addEventListener('mouseenter', ()=>{
    document.getElementById('body').style.cursor = `url('./SovietKanna.png'), auto`
    console.log('event')
})
resetCursor.addEventListener('click', ()=>{
    document.getElementById('body').style.cursor = `unset`
    console.log('event')
})