// // ES6

// const numbers = [1, 2, 3, 4]
// // const numbersDouble =[]
// // for (let i = 0; i < numbers.length; i++){
// //     numbersDouble.push(numbers[i]*2)
// // }
// // console.log(numbersDouble)

// // map
// const numbersDouble = numbers.map(number => number * 2)
// // const numbersDouble = numbers.map((number) => {
// //     return number*2
// // })
// console.log(numbersDouble)

// const chars = ['a', 'b', 'c']
// const charsDouble = chars.map((char) => {
//     return char + char
// })
// console.log(charsDouble);

// const students = [{
//         name: "uyen",
//         age: 10
//     },
//     {
//         name: 'nha van',
//         age: 11
//     },
//     {
//         name: 'hieu',
//         age: 3
//     },
//     {
//         name: 'huy',
//         age: 2
//     }
// ]
// const babyStudents = students.filter((student) => {
//     return student.age < 5
// })
// console.log(babyStudents);
// const babyStudentsName = babyStudents.map(student => student.name)
// console.log(babyStudentsName);
// const names = students.map(student => student.name)
// console.log(names)

// filter

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const oddNumbers = numbers.filter((number) => {
//     return number % 2 !== 0 // return true
// })
// console.log(oddNumbers);
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i]%2 !== 0){
//         oddNumbers.push(numbers[i])
//     }
// }
// console.log(oddNumbers);

// reduce 
const myApiUrl = 'https://60603e5404b05d0017ba219d.mockapi.io/api/v1/todos'
const getAllTodos = async () => {
    const response = await fetch(myApiUrl)
    const data = await response.json()
    console.log(data)
    return data
}
// getAllTodos()
const createNewTodo = async (newTodoData) => {
    const response = await fetch(myApiUrl, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newTodoData)
    })
    const data = await response.json()
    console.log(data)
}
// createNewTodo({
//     content: 'Đi chợ mua rau',
//     status: false
// })
const todoItemsEl = document.getElementById('to-do-items')
const renderTodo = async () => {
    const todosData = await getAllTodos()
    todoItemsEl.innerHTML += `<div class ='to-do-item'>${todosData[0].content}</div>`
}
renderTodo()

// btvn: nút +, ấn vào thêm phần tử