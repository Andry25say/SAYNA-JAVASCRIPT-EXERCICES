function stringSize(chaine){
    let stringSize = " ";
if(chaine.length < 5){
    stringSize = "small";
}
else if(chaine.length === 5){
    stringSize = "medium";
}
else{
    stringSize = "large";
}
return stringSize;
}
console.log(stringSize("cat")); 