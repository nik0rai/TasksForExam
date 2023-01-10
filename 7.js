const N = 5;
let X = new Array(N);

for(var i = 0; i<N; i++){
    X[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
}
console.log("X(N): " + X)

var sum = 0;
for(var i = 0; i < X.length ; i++){
   if (X[i]%5!==0) sum += Math.pow(X[i],2);
}
console.log(`Sum = ${sum}`)
