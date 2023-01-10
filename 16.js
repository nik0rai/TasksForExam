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

var X = [];
var sum = 0;
for(var i = 0; i<M; i++){
    for(var j = 0; j<N; j++){
        sum += A[j][i];      
    }
    X.push(sum);
    sum = 0;
}
console.log("-----------------\nsums:")
X.forEach(x=>{
    console.log(x)
})