const N = 5, M = 2;
var A = new Array(N);
for(var i = 0; i < N; i++){
    A[i] = new Array(M)
}

for(var i = 0; i<N; i++){
    for(var j = 0; j<M; j++){
        A[i][j] = Math.floor(Math.random() * (10 - (-10)) + (-10));
        console.log(A[i][j] + ' ')
    }
    console.log('\n')
}

var max = A[0][0];
var idRow = 0, idCol = 0;
for(var i=0; i<N; i++){
    for(var j=0; j<M; j++){
        if(A[i][j] > max){
            max = A[i][j];
            idRow = i;
            idCol = j;
        }
    }
}

console.log(`max element: [${idRow}][${idCol}] = ${max}`)
