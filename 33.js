let text = "ну тут есть аб т.к. я знаю про абатура)"
var count = (text.match(/аб/g) || []).length;
console.log(count)