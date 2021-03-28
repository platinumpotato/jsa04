const pokeInfoEl = document.getElementById('poke-info')
const searchBtn = document.getElementById('search-btn')
const pokeInput = document.getElementById('poke-number')
const clearBtn = document.getElementById('clear-btn')
let numberPoke = 0
document.addEventListener('DOMContentLoaded', ()=>{
    let imgUrl = localStorage.getItem('imgUrl')
    let name = localStorage.getItem('name')
    if (name != null && imgUrl!= null){
        pokeInfoEl.innerHTML += `<img class='poke${numberPoke}' src=${imgUrl}>
        <p>${name}</p>`
    }
})

async function getPokeInfo(pokeId){
    //fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    //.then(response =>{
    //    response.json().then(data => {
    //      console.log(data)
    //  })
    //})
    // ko cần async await
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    const data = await response.json()
    console.log(data)
    pokeInfoEl.innerHTML += `<img class='poke${numberPoke}' src='${data.sprites.front_default}'>
    <p>${data.name}</p>`
    localStorage.setItem('imgUrl', data.sprites.front_default)
    localStorage.setItem('name', data.name)
    // <button class='poke${numberPoke}'>x</button>`
    // let pokeEls = document.getElementsByClassName(`poke${numberPoke}`)
    // pokeEls[1].addEventListener('click', ()=>{
    //     pokeEls[0].style.display = 'none'
    //     pokeEls[1].style.display = 'none'
    // })
    // numberPoke++
}

searchBtn.addEventListener('click', ()=>{
    getPokeInfo(pokeInput.value)
})

pokeInput.addEventListener('keyup', (e)=>{
    if (e.key == 'Enter'){
        getPokeInfo(pokeInput.value)
    }
})

clearBtn.addEventListener('click', ()=>{
    pokeInfoEl.innerHTML=''
    localStorage.removeItem('imgUrl')
    localStorage.removeItem('name')
})
// for (let id = 1; id=5, id++;){
//     getPokeInfo(id)
// }

// async/await (bất đồng bộ) >< đồng bộ
// fetch: gửi request lấy thông tin

// nấu cơm
// 1. vo gạo
// 2. cắm cơm
// 3. nấu đồ ăn (ko chờ cơm chín mới nấu)
// 4. ăn cơm

// 2 đang chạy, 3 vẫn đc chạy
// 3 xong 4 mới chạy => await