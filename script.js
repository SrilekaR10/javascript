

function calc(a , b){
let addition=a+b;
let substract=a-b;
let multiplication=a*b;
let divide=a/b;

return{
    addition:addition,
    substract:substract,
    multiplication:multiplication,
    divide:divide
};
}
let res= calc(14,8);
console.log("addition:", res.addition);
console.log("substract:", res.substract);
console.log("multiplication:", res.multiplication);
console.log("divide:", res.divide);