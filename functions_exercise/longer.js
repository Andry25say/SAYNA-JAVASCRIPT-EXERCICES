function longer (chaine1,chaine2){
    let longer = " ";
    if (chaine1.length >= chaine2.length){
        longer = chaine1;
    }
    else{
        longer = chaine2;
    }
    
    return longer;
}
console.log(longer("drum","piranha"));
console.log(longer("basket","fork"));
console.log(longer("flanelle","durable"));
console.log(longer("disrupt","ability"));
console.log(longer("bird","shoe"));