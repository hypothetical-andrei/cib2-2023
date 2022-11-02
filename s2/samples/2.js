function doSomething () {
  return new Promise((resolve, reject) => {
    let x
    setTimeout(() => {
      x = 100
      resolve(x)
    }, 1000)
  })
}

doSomething()
  .then((x) => {
    console.log(x)
  })
  .catch((err) => {
    console.log(err)
  })