function findOutlier(integers){
    let parity = Math.abs(integers[0] % 2)
    if(Math.abs(integers[1] % 2) != parity){
        if(integers[2] % 2 == parity ){
            return integers[1]
        }else{
            return integers[0]
        }
    }
    for(let i = 2; i < integers.length; i++ ){
        if(Math.abs(integers[i] % 2) != parity) return integers[i]
    }
}

console.log(findOutlier([1,3,5,-1,-2]))

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))

/*

[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)

[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)

*/