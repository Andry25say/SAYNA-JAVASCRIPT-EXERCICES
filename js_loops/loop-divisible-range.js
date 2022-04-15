let tableau = ["bo",90,"un",true];

ajouter = tableau.push("un");
// console.log("for in");
// for(let index in tableau){
//     console.log(tableau[index]);
// }
// console.log("for of");
// for(let valeurs of tableau){
//     console.log(valeurs)
// }
console.log("for Each");
tableau.forEach(function(valeurs,index){
    console.log(valeurs);
    console.log(index);
})
