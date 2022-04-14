function startsWithR(chaine){
if(chaine[0] === "r" || chaine[0] === "R" ){
   return true;
}
else{
    return false;
}
}
console.log(startsWithR("roger that"));
console.log(startsWithR("Row, row, row your boat"));
console.log(startsWithR("slip"));
console.log(startsWithR("Taxicab"));