const N = 5;
let A = new Array(N);

console.log("original vector: ")
for(var i = 0; i<N; i++){
    A[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
    console.log(A[i] + ' ');
}

let isNext = false
for(var i = 0; i < N - 1; i++){
    if(A[i] === 0 && A[i+1] === 0){
        isNext = true;
        break;
    }
}
console.log("result: " + isNext)