function arraySum(tableau) {
let somme = 0;
for (i=0; i<tableau.length; i++){
somme = somme+tableau[i];
}
return somme;
}
console.log(arraySum([6,2,3]));
console.log(arraySum([7,6,-5,2]));
console.log(arraySum([8]));
console.log(arraySum([0]));

