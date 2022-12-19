// Задание 7 

let myArr2 = [1, 2, 4, 5, 7, 8, 12, 'el1', 'el2', 'el3', 'el4', 'el5']
if (myArr2.includes(null)) console.log(`Массив содержит ${null} `)
let result = myArr2.filter(el => typeof(el) === 'number' || el == null) //отстортировали по числам и null
let resultFilter = result.filter(el => el % 2 === 0 && el != null) // фильтрую по четным
let resultFilter2 = result.filter(el => el % 2 != 0 && el != null) //фильтрую по нечетным
console.log(`Количество четных чисел в массиве = ${resultFilter.length}`)
console.log(`Количество нечетных чисел в массиве = ${resultFilter2.length}`)
