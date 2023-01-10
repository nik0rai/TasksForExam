const N = 5;
let A = new Array(N);

for(var i = 0; i<N; i++){
    A[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
}
console.log("A(N): " + A)

var zad = 5;
var res = A.filter(x=>x<zad).length;
console.log(`result A = ${res}`)
