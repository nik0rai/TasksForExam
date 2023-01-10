let symbol = ","
let text = "dogs, cats and other animals are cute!"
let res = text.split('').filter(x=> x === symbol).length
console.log(res)