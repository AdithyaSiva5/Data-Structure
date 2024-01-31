function fibonocci(num){
    const fib = [0,1]
    for(i = 2 ; i < num ; i ++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib
}
console.log(fibonocci(7));

//now through recurssion

function recurssionfibonocci(num){
    if(num < 2){
        return num
    }
    return recurssionfibonocci(num - 1) + recurssionfibonocci(num -2);
}