function divisible(num1, num2){
    let divisible = 0;
    if (num1 % num2 === 0){
       divisible = true;
    }
    else{
        divisible = false;
    }
    return divisible;
}
console.log(divisible(12,3)); 
console.log(divisible(12,5));
console.log(divisible(60,4));
console.log(divisible(60,11));
console.log(divisible(21,7));
console.log(divisible(21,6));
