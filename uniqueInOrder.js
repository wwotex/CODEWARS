var uniqueInOrder=function(iterable){
    iterable = Array.from(iterable)
    for( let i = 1; i < iterable.length; i++ ){
        while(iterable[i-1] === iterable[i]){
            iterable.splice(i,1)
        }
    }
    return iterable
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1,2,2,3,3]))
/*
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/