function endsInLy(chaine){
    let finalMot = "ly";
if(chaine[chaine.length-2]+chaine[(chaine.length -1)] === finalMot){
return true;
}
else{
     return false;
}
}
console.log(endsInLy("pretty"));
console.log(endsInLy("instant"));
console.log(endsInLy("analytic"));
console.log(endsInLy("timidly"));
console.log(endsInLy("fly"));
console.log(endsInLy("gallantly"));