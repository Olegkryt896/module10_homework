

// // function arrayDiff(a, b) {
// //   let r = a
  
// //   for (i = 0; i < b.length; i ++) {
// //     r = r.filter(el => el !== b[i])
    
// //   }
// //   return r
// // }


// // arrayDiff([1,2,3], [1,2])


// // Задача https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript

// function duplicateCount(text){
//   let r = text.split('')
//   for (i = 0; i < r.length; i++) {
//     return 1
//   }
// }


// // Задача https://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript

// var uniqueInOrder=function(iterable){
//   if(typeof(iterable) == 'string') {
//     return iterable.replace(/(.)\1{1,}/g, '$1').split('')
//   }
//   else {
//     if (typeof(iterable[0]) == 'string') {
//       let res = iterable.join('')
//       return res.replace(/(.)\1{1,}/g, '$1').split('')
//     }
//     else {
//     let res =  iterable.join('').replace(/(.)\1{1,}/g , '$1').split('')
//     return res.map(el => Number(el))
//     }
    
//   }

  
// }

// // uniqueInOrder('222222111112424421')
// uniqueInOrder(['a','a','a','d','t', 'a'])


// Задание 1
// let num = prompt('Введите значение')
// console.log(typeof(num))
// console.log(num)
// num1 = +num
// console.log(num1)
// console.log(typeof(num1))
// if(typeof(num1) == 'number') { 
//   if (isNaN(num1)) console.log('Упс, кажется, вы ошиблись')
//   else if(num1 % 2 == 0)  console.log('Это четное число')
//   else console.log('Это нечетное число')
// }
// else console.log('Упс, кажется, вы ошиблись')


// Задание 2

function res(x) { 
  if (typeof(x) =='string') console.log('x - строка')
  else if (typeof(x) == 'number') console.log('x - число')
  else if (typeof(x) == 'boolean') console.log('х - булевое')
  else console.log('Тип x не определён')
}

res(212121)



// Задание 3

let str = x => { 
  console.log(x.split('').reverse().join(''))
}
str ('Hello')

// Задание 4

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

getRandomIntInclusive(0, 100)


// Задание 5.

let arr = [1, 2, 3, 4]
console.log(arr.length)
arr.forEach(el => console.log(el)) 

// Задание 6 

let myArr = ['element1', 'element1', 'element1', 'element1']
console.log(myArr.every(el => el === myArr[0]))

// Задание 7 

let myArr2 = [1, 2, 4, 5, 7, 8, 12, 'el1', 'el2', 'el3', 'el4', 'el5']
if (myArr2.includes(null)) console.log(`Массив содержит ${null} `)
let result = myArr2.filter(el => typeof(el) === 'number' || el == null) //отстортировали по числам и null
let resultFilter = result.filter(el => el % 2 === 0 && el != null) // фильтрую по четным
let resultFilter2 = result.filter(el => el % 2 != 0 && el != null) //фильтрую по нечетным
console.log(`Количество четных чисел в массиве = ${resultFilter.length}`)
console.log(`Количество нечетных чисел в массиве = ${resultFilter2.length}`)


// Задание 8 

let fruits = new Map([

  ["apple", "green"],

  ["strawberry", "red"],

  ["blueberry",    "blue"], 

  ['banana', 'orange'],

  ['guava', 'green'],

]);


for (let pair of fruits.entries() ) { 
  
  console.log(`Ключ - ${pair[0]}, значение - ${pair[1]} `)
}
