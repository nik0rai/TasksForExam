const N = 5, M = 2;
var A = new Array(N);
for(var i = 0; i < N; i++){
    A[i] = new Array(M)
}

for(var i = 0; i<N; i++){
    for(var j = 0; j<M; j++){
        A[i][j] = Math.floor(Math.random() * (10 - (-10)) + (-10));     
    }
}
console.log("original:")
A.forEach(x=>{
    console.log(x)
})

var B = 0, flag = false;
for(var i = 0; i<N; i++){
    for(var j = 0; j<M; j++){
        if(A[i][j] < 0){
            flag = true 
            break;
        }     
    }
    if(!flag) B++;
    flag = false;
}

console.log("ammount: " + B)