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

var p = 0, q = 1;
var temp = new Array(N)
for(var i = 0; i < N; i++){
    temp[i] = A[i][p]
    A[i][p] = A[i][q]
    A[i][q] = temp[i]
}

console.log("--------------------\nswapped:")
A.forEach(x=>{
    console.log(x)
})