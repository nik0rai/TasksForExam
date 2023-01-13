class Point {
    x;
    y;
    z;
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

const n = 5;
let plane = new Array(n);

for(var i = 0; i < n; i++){
    plane[i] = new Point(Math.floor(Math.random() * (10 - (-10)) + (-10)), 
                            Math.floor(Math.random() * (10 - (-10)) + (-10)))
}

console.log("array of points:")
plane.forEach(x=>{
    console.log(x)
})

var res = false;
for(var i = 0; i<n; i++){
    if(plane[i].x === 0 && plane[i].y === 0 && plane[i].z === 0){
        res = true
        break;
    }
}

console.log("result: " + res) //вообще не знаю может и не понял задачу
