const N = 5;
let A = new Array(N);

console.log("original array: ")
for(var i = 0; i<N; i++){
    A[i] = Math.floor(Math.random() * (10 - (-10)) + (-10));
    console.log(A[i] + ' ');
}

var kolp = 0, sump = 0, kolo = 0, proizvo = 1;
for (var i = 0; i<N; i++){
    if (A[i]>0) { kolp++; sump += A[i];}
    else if (A[i]<0) {kolo++; proizvo *= A[i];}
}
console.log(`кол-во положительных: ${kolp}, сумма положительных:  ${sump}, кол-во отрицательных:  ${kolo}, произведение отрицательных:  ${proizvo},`);
