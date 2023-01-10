const N = 5, M = 2;
var A = new Array(N);
for(var i = 0; i < N; i++){
    A[i] = new Array(M)
}

var sum = 0, sred = 1;
for(var i = 0; i<N; i++){
    for(var j = 0; j<M; j++){
        A[i][j] = Math.floor(Math.random() * (10 - (-10)) + (-10));
        sum+=A[i][j];
        sred = sum / (M*N)
        console.log(A[i][j] + ' ')
    }
    console.log('\n')
}

var kol = 0;
for(var i = 0; i<N; i++){
    for(var j = 0; j<M; j++){
        if(A[i][j] > sred)
        kol++;
    }
}
console.log("result of count: " + kol)