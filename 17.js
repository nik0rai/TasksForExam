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

var p = 3, q = 1; // p is line
var X = new Array(M);
var Y = new Array(N);
for(var i = 0; i < N; i++){
    for(var j = 0; j < M; j++){
        X[j] = A[p][j]
        Y[i] = A[i][q];
    }
}
console.log(`X(M): ${X}\nY(N): ${Y}`)