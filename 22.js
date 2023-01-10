class Point {
    x;
    y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
}

const n = 5;
let plane_2d = new Array(n);

for(var i = 0; i < n; i++){
    plane_2d[i] = new Point(Math.floor(Math.random() * (10 - (-10)) + (-10)), 
                            Math.floor(Math.random() * (10 - (-10)) + (-10)))
}

console.log("array of points:")
plane_2d.forEach(x=>{
    console.log(x)
})

var res = false;
for(var i = 0; i<n; i++){
    if(i.x === 0 && i.y === 0){
        res = true
        break;
    }
}

console.log("result: " + res) //вообще не знаю может и не понял задачу