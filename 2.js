const N = 5;
let X = new Array(N);
let Y = new Array(N);

for(var i = 0; i<N; i++){
    X[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
}
console.log("X(N): " + X)

for(var i = 0; i<N; i++){
    Y[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
}
console.log("Y(N): " + Y)

var elX = Math.max.apply(null, X);
var indX = X.findIndex((el) => el === elX);

var elY = Math.max.apply(null, Y);
var indY = Y.findIndex((el) => el === elY);

X[indX] = elY;
Y[indY] = elX;

console.log(`X = ${X}\nY = ${Y}`);
