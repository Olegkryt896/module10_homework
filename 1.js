// Задание 1
let num = prompt('Введите значение')
console.log(typeof(num))
console.log(num)
num1 = +num
console.log(num1)
console.log(typeof(num1))
if(typeof(num1) == 'number') { 
  if (isNaN(num1)) console.log('Упс, кажется, вы ошиблись')
  else if(num1 % 2 == 0)  console.log('Это четное число')
  else console.log('Это нечетное число')
}
else console.log('Упс, кажется, вы ошиблись')