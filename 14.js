const N = 5, M = 2;
var A = new Array(N);
for(var i = 0; i < N; i++){
    A[i] = new Array(M)
}

var sum = 0, proiz = 1;
for(var i = 0; i<N; i++){
    for(var j = 0; j<M; j++){
        A[i][j] = Math.floor(Math.random() * (10 - (-10)) + (-10));
        if(A[i][j] % 2 !== 0){
            sum += A[i][j];
            proiz *= A[i][j];
        }
        console.log(A[i][j] + ' ')
    }
    console.log('\n')
}

console.log(`result: sum = ${sum}\tproiz = ${proiz}`)