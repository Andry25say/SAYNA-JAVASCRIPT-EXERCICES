function reverseIterate(str){
    let tableau = str.split("");  
    let renverser = tableau.reverse(); 
  for(i= 0;i<str.length;i++){
      console.log(tableau[i]);
  }   
}
reverseIterate("carrot");
reverseIterate("box");