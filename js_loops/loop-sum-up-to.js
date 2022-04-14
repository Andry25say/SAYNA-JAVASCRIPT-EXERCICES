function sumUpTo(max){
    let total = 0;
    for(let i = 1; i<= max;i++){
       total += i;
    }
    return total;
}
console.log(sumUpTo(4));
console.log(sumUpTo(5));
console.log(sumUpTo(2));