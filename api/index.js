const pokeInfoEl = document.getElementById('poke-info')
const searchBtn = document.getElementById('search-btn')
const pokeInput = document.getElementById('poke-number')

async function getPokeInfo(pokeId){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    const data = await response.json()
    console.log(data)
    pokeInfoEl.innerHTML += `<img src='${data.sprites.front_default}'>`
}

searchBtn.addEventListener('click', ()=>{
    getPokeInfo(pokeInput.value)
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