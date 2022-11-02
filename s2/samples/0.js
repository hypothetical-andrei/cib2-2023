let a = [ 1, 2, 3, 4, 5, 6, 7]

const double = x => x * 2

const a1 = a.map(double)

console.log(a1)

const a2 = a.map(x => x * 2)

console.log(a2)

const a3 = a.map((e, i, a) => `a[${i}]=${e}`)

console.log(a3)

const a4 = a.filter(e => e > 3)

console.log(a4)

const s = a.reduce((a, e) => a + e, 0)

console.log(s)

const s1 = a.reduce((a, e) => a * e, 1)
console.log(s1)

const s2 = a.reduce((a, e) => a / e, 5040)
console.log(s2)