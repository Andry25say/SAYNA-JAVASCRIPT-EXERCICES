function keepItQuiet(chaine){
    let minuscule = chaine.toLowerCase();
    return minuscule+"...";
}
console.log(keepItQuiet("HOORAY"));
console.log(keepItQuiet("Doggo"));
console.log(keepItQuiet("WHAT ?!?!"));