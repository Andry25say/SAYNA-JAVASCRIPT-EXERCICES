function isLong(chaine){
    if(chaine.length>5){
        return true;
    } 
    else{
        return false;
    }
}
console.log(isLong("pie")); 
console.log(isLong("kite"));
console.log(isLong("kitty"));
console.log(isLong("telescope"));
console.log(isLong("thermometre"));
console.log(isLong("restaurant"));