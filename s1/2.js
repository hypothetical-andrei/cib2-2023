function f(a, b, c) {
  return a + b + c
}

console.log(f(1,2,3,4,5,6,7,8))
console.log(f('a','b','c'))

let f1 = function (x) {
  return x * 2
}

f1 = 5

let f2 = (x) => {
  return x * 2
}

let f3 = x => x * 2