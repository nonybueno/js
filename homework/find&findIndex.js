// คำสั่ง find ใช้ในการค้นหาข้อมูลจากเงื่อนไขที่เรากำหนดจากข้อมูลแรกไปยังข้อมูลตัวสุดท้ายขแง Array
// และเมื่อค้นหาจนเจอก็จะหยุดการทำงานและจบกระบวนการทันที
// เมื่อหาไม่เจอ find() จะ return ค่าออกมาเป็น undefinded
// ex.1
let scores = [78,89,43,67,29]
// arrow function
let failScore = scores.find(sc => sc < 50)
console.log(failScore)
// call back function 
function countScr(scr){
    return scr > 50
}
let passScore = scores.find(countScr)
console.log(passScore)


//ex.2
let bookInfo = [
    {
        book: 'test1',
        bookId: 1
    },    {
        book: 'test2',
        bookId: 2
    },    {
        book: 'test3',
        bookId: 3
    },    {
        book: 'test5',
        bookId: 5
    },    {
        book: 'test6',
        bookId: 6
    },    {
        book: 'test7',
        bookId: 5
    }
]
console.log(bookInfo.find(book => book.bookId > 3))