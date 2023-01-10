const N = 5;
let A = new Array(N);

console.log("original vector: ")
for(var i = 0; i<N; i++){
    A[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
    console.log(A[i] + ' ');
}

console.log("result vector: ")
let flag = false
for(var i = 0; i<N; i++){
    if(A[i] > 0) flag = true;
    if(flag) A[i]--;
    console.log(A[i] + ' ')   
}