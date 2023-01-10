var text = "баба яга уже обманула меня"
var newtext = text.split('')

for(var i = 0; i < newtext.length; i++){
    if(newtext[i] === "а"){
        newtext[i] = "б"
    }else if(newtext[i]==="б"){
        newtext[i] = "а"
    }
}

console.log(newtext.join(''))