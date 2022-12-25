snail = function(array) {
    if(array[0].length === 0) return []
    return search(array, 0, 0, 0, true)
}

function search(array, i, j, dir, lastTurned){
    
    let ni = i, nj = j
    switch(dir){
        case 0:
            nj += 1
            break
        case 1:
            ni += 1
            break
        case 2:
            nj -= 1
            break
        case 3:
            ni -= 1
    }
    
    if(array[ni] && array[ni][nj]) {
        let temp = array[i][j]
        array[i][j] = null
        let past = search(array, ni, nj, dir, false)
        past.unshift(temp)
        return past
    } else {
        if(lastTurned){
            return [array[i][j]]
        }
        return search(array, i, j, (dir+1)%4, true)
    }
}


array = [[1,2,3,4,5],
         [6,7,8,9,10],
         [11,12,13,14,15],
         [16,17,18,19,20],
         [21,22,23,24,25]]
console.log(snail(array))