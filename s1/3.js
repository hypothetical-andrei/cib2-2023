let a = [0,1,2,3,4,5,6,7]

console.log(a.shift())
console.log(a)

a.push(8)
console.log(a)

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    console.log(a[i])
  }
}

console.log(5 == '5')
console.log(5 === '5')

for (const element of a) {
  console.log(element)
}