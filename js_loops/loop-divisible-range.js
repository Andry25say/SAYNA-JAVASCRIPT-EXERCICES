function divisibleRange(min, max, num){
    for(let i = 0; min>i<max;i++){
        if (i%num === 0){
            console.log(i);
        }
    }
}
divisibleRange(17, 40, 9);