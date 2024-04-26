function getMultiplesofTwo(arr){
    return arr.map(function(mul){
return mul * 2;
})
}
var mul = [1,2,3,4];
var muloftwo = getMultiplesofTwo(mul);
console.log("Multiples of two are : " , muloftwo);