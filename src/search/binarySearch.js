var a = [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]

var b = a.sort().match(/([^])\1+/g)

console.log(b)