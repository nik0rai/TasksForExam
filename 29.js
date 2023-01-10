let symbol = "g"
let text = "gravity is the main \"g\" of our life"
let res = text.split('').filter(x=> x === symbol).length
console.log(res)