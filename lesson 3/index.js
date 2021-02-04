//sign up validation
//username 
//- min 6 characters
//- no special char
//pass 
//- min 8 characters
//- 1 special character (.,- not letters or numbers)
//- 1 uppercase
//- 1 lowercase
//- 1 number
//confirm pass same as pass
//all fields checked when key up
//show error message under input elements

const usernameInp = document.getElementById('username')
const passInp = document.getElementById('password')
const confirmInp = document.getElementById('confirm-pass')
const userError = document.getElementById('user-error')
let charUser = 0
let charPass = 0
let keys = {
    lowerLetters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    upperLetters: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    special: ['`', '-', '_', '=', '+', '[', '{', ']', '}', "|", ';', ':', "'", '"', ',', '<', '.', '>', '/', '?', ],
    delete: ['Backspace', 'Delete'],
    modifiers: [1, 2]
}
usernameInp.addEventListener('keyup', (e) => {
    if (e.location !== 1 && e.location !== 2) {
        charUser++
        if (e.key === keys.delete[0] || e.key === keys.delete[1]) {
            if (charUser > 2) {
                charUser - 2
            } else if (charUser === 1) {
                charUser--
            }
        }
    }
    console.log(charUser)
    // console.log(e.key)
    console.log(e.key ===keys.delete[0])
    // console.log(keys.delete[1])
    for(let i =0; i< keys.special.length; i++){
        if(e.key === keys.special[i]){
            userError.innerText = 'no special character in username'
        }
    }
})