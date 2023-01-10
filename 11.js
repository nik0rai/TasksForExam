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

var sum = 0, kol = 0, sred = 1;
var line = new Array(N);
for(var i = 0; i < N; i++){
    line[i] = new Array(3)
}

for(var i = 0; i<N; i++){
    for(var j = 0; j<M; j++){
        if(A[i][j] > 0){
            sum+=A[i][j];
            kol++;
            sred = sum/M;
            line[i][0] = "sum = " + sum;
            line[i][1] = "kol = " + kol;
            line[i][2] = "sred = " + sred;
        }
    }
    sum = 0; kol = 0; sred = 1;
}

//undefined будет показан тогда, когда все числа отрицательные
for(var i = 0; i<N; i++){
    console.log(`|line ${i}|\t${line[i][0]} ${line[i][1]} ${line[i][2]}`)    
}