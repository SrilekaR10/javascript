function getEvenNumbers(arr){
return arr.filter(function(num){


return num % 2 == 0;

});
}
var num = [1,2,3,4];
var evennum = getEvenNumbers(num);
console.log("Even numbers are : " ,evennum);