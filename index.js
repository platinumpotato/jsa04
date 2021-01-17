// có 10 con cừu
// kích thước đàn cừu [12,41,36,54,6,7,4,5,65,43]
// mỗi tháng lượng lông mỗi con cừu tăng 20% 
// khi lông cừu >= 50 thì cắt còn 10
// lượng lông cắt được cho vào kho

// tính lượng tiền thu được khi bán lông trong kho sau 2 năm biết 1 đơn vị lông giá 100k

// 24 x {
// cừu lớn

// xem có cắt lông ko
    // nếu có: cắt
    // nếu ko: kệ
// }

var sheep = [12, 24, 37, 20, 14, 5, 16, 31, 27, 8]
var kho = 0
var i = 0
while(i<24){
    for (let i = 0; i < sheep.length; i++){
        sheep[i] = Math.round(sheep[i]*1.2)
        if (sheep[i]>=50){
            kho = kho + sheep[i] - 10
            sheep[i]= 10
        }
    }
    i++
}
document.getElementById('kho').innerText = kho*100
