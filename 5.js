var N = 3, x = 1, sum = 0;
for (var i=1; i<=N;i++){
 sum+=Math.pow(Math.sin(x),i);
}
console.log(`Sum = ${sum}`)
