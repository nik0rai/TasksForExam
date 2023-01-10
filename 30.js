let text = "уху ели пока не перехотели"
let count = 0;
for(var i=0; i < text.length; i++){
    if(text[i] === "х" || text[i]==="у"){
        count++;
    }
}

console.log(count)