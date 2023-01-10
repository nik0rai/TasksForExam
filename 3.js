const N = 2;
let A = new Array(3*N);
let B = [];

for(var i = 0; i<A.length; i++){
    A[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
}

for(var i = 3; i <= 3*N ; i+=3){
    B.push((A[i-3]+A[i-2]+A[i-1])/3);
}
console.log(`A = ${A}\nB = ${B}`);