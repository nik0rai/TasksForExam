var n = 4;
var text = "some text to change";

let res = (text.substring(0,n).split('').map(x=>x+"!")).join('') + text.substring(n); // one idea
console.log(res); //one idea

//second idea
for(var i = 1; i <= n+2; i+=2){
    text = text.substring(0,i) + "!" + text.substring(i);
}
console.log(text); //second idea