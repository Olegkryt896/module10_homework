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
