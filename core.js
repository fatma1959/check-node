const fs = require('fs')


//asynchrounous 
// console.log('start reading file .....')
// fs.readFile('./file.txt','utf-8', (err,data) =>{
//     if (err) return console.log(err)
//     console.log(data)
// })
// console.log('end reading file ....')


//synchrounous 
console.log('start reading file ....')
const file = fs.readFileSync('./file.txt', 'utf-8')
console.log(file)
console.log('end reading file ...')