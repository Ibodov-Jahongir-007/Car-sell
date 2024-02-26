//let users = ['Alex', 'John', 'Michael', 'Bob', 'Elza', 'Shmelza', 'Mikhail', 'Jago']
//let even = users.filter((name) => name.length % 2 === 0)
//let odd = users.filter((name) => name.length % 2 !== 0)
// 
//console.log(even);
//console.log(odd);

//let users = ['Alex', 'Белкин', 'John', 'Александр', 'Michael', 'Jordan', 'aziz', 'Kamol', 'amal', 'Bob', 'Elza', 'Shmelza', 'Mikhail', 'Jago']


//let sort = users.sort((a,b) => a.length - b.length)
//console.log(users.reverse()[0]);

let cars_prices = [4000,90000,20000,14000,7000,30000,18000,45000,36000]
alert('Car prices 4000,90000,20000,14000,7000,30000,18000,45000,36000')

let from = prompt('Сумма от')
let to = prompt('До') 

let FromTo = cars_prices.filter(cena => cena >= from && cena <= to)
alert('Answer in console')
let allRight = `U can buy cars with ${FromTo} price`
console.log(allRight);