function larger(num1,num2){
let larger = 0;
if(num1>num2){
    larger = num1;
}
else{
    larger = num2;
}
return larger;
}
console.log(larger(256,400));
console.log(larger(31,4));
console.log(larger(-6,7));
console.log(larger(11.3,11.2));
console.log(larger(-10,-3));