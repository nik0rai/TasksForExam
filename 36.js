var text = "hello world! New sentence. And other one?"
var count = (text.match(/[.?!]/g) || []).length;
console.log(count)