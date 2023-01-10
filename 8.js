const N = 5;
let A = new Array(N);

for(var i = 0; i<N; i++){
    A[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
}
console.log("A(N): " + A)

var elMax = Math.max.apply(null, A);
var indMax = A.findIndex(x=> x===elMax);
var elMin = Math.min.apply(null, A);
var indMin = A.findIndex(x=> x===elMin);

A[indMax] = elMin;
A[indMin] = elMax;

console.log(`A = ${A}`)
