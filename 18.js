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

var min = A[0][0], max = A[0][0], 
min_posI = 0,  min_posJ = 0,
max_posI = 0,  max_posJ = 0;

for(var i = 0; i<N; i++){
    for(var j = 0; j<M; j++){
        if(A[i][j] > max){
            max = A[i][j]
            max_posI = i;  max_posJ = j;
        }
        else if(A[i][j] < min){
            min = A[i][j]
            min_posI = i;  min_posJ = j;
        }
    }
}

var temp = A[max_posI][max_posJ]
A[max_posI][max_posJ] = A[min_posI][min_posJ]
A[min_posI][min_posJ] = temp

console.log("-----------------\nswapped:")
A.forEach(x=>{
    console.log(x)
})