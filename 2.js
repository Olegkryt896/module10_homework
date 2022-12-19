// Задание 2

function res(x) { 
  if (typeof(x) =='string') console.log('x - строка')
  else if (typeof(x) == 'number') console.log('x - число')
  else if (typeof(x) == 'boolean') console.log('х - булевое')
  else console.log('Тип x не определён')
}

res(212121)