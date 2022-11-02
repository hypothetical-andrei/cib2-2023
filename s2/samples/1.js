function doSomething (callback) {
  let x
  setTimeout(() => {
    x = 100
    callback(x)
  }, 1000)
}

doSomething((x) => console.log(x))