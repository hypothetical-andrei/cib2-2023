let o = {
  name: 'Andrei',
  age: 40,
  printMe: function () {
    console.log(`i am a person named ${this.name} and aged ${this.age}`)
  }
}

for (const prop in o) {
  console.log(o[prop])
}

o.printMe()