let text = "тут вроде есть буква Ы"
var res = text.toLowerCase().split('').some(x=> x === 'ы')
console.log(res)