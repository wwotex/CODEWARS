function fib(n) {
    
}


function fib_old(n) {
    if( n == 0 ) return 0n
    if( n == 1 ) return 1n
    // if( n < 0 ) return fib(n+2) - fib(n+1)
    let f1 = 0n, f2 = 1n
    if( n < 0 ){
        for( let k = -1; k >= n; k-- ){
            let tmp = f2 - f1
            f2 = f1
            f1 = tmp
            let a = 0
        }
        return f1
    }
        
    for( let k = 2; k <= n; k++ ){
        let tmp = f1 + f2
        f1 = f2
        f2 = tmp
    }
    return f2
}

console.log(fib(5))