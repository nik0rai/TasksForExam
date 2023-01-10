const N = 5;
let X = new Array(N);

for(var i = 0; i<N; i++){
    X[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
}
console.log("X(N): " + X)

var indMax = X.findIndex(x => x===Math.max.apply(null, X));
for(var i = 0; i < indMax ; i++){
   if (X[i]<0) X[i]=0;
}
console.log(`result X = ${X}`);