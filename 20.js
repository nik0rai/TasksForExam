let a = [1,1,-2,3,5,1,-2];
var res = a.findIndex(x=> x===0);
res = res===-1 ? "not found" : res;
console.log(res)