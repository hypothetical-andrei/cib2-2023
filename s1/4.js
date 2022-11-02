let a = [0,1,2,3,4,5,6,7]

console.log(a.indexOf(3))
console.log(a.indexOf(10))

console.log(a.slice(1,4))
console.log(a.slice(0, a.length))

let b = a.splice(1, 3, 'a', 'b')
console.log(b)
console.log(a)