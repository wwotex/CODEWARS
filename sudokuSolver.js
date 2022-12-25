function sudoku(puzzle) {
    let arrays = 1
    while(arrays > 0) {
        arrays = 0
        for( let i = 0; i < 9; i++ ){
            for( let j = 0; j < 9; j++ ){
                if( puzzle[i][j] === 0 || Array.isArray(puzzle[i][j])){
                    puzzle[i][j] = findPossibleSet(i, j, puzzle)
                    if(Array.isArray(puzzle[i][j])) {
                        arrays += 1
                    }
                }
            }
        }
        let a = 0
    }
    return puzzle
}

function findPossibleSet(x, y, grid) {
    let set1 = findLineValueSet(y, grid, 0)
    let set2 = findLineValueSet(x, grid, 1)
    let set3 = findBoxValueSet(x, y, grid)
    let occurred = new Set([...set1, ...set2, ...set3])
    let all = new Set([1,2,3,4,5,6,7,8,9])
    let possible = [...all].filter((el) => !occurred.has(el))
    return (possible.length === 1) ? possible[0] : possible
}

function findLineValueSet(x, grid, axis) {
    let set = new Set()
    for( let i = 0; i < 9; i++ ){
        if( axis === 0 && !Array.isArray(grid[i][x]) && grid[i][x] > 0 ) {
            set.add(grid[i][x])
        } else if ( axis === 1 && !Array.isArray(grid[x][i]) && grid[x][i] > 0 ) {
            set.add(grid[x][i])
        }
    }
    return set
}

function findBoxValueSet(x, y, grid) {
    let set = new Set()
    let boxStartX = Math.floor(x/3)*3
    let boxStartY = Math.floor(y/3)*3
    for( let i = boxStartX; i < boxStartX+3; i++ ){
        for( let j = boxStartY; j < boxStartY+3; j++ ){
            if( !Array.isArray(grid[i][j]) && grid[i][j] > 0 ){
                set.add(grid[i][j])
            }
        }
    }
    return set
}

var puzzle = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]]

console.log(sudoku(puzzle))
/* Should return
[[5,3,4,6,7,8,9,1,2],
[6,7,2,1,9,5,3,4,8],
[1,9,8,3,4,2,5,6,7],
[8,5,9,7,6,1,4,2,3],
[4,2,6,8,5,3,7,9,1],
[7,1,3,9,2,4,8,5,6],
[9,6,1,5,3,7,2,8,4],
[2,8,7,4,1,9,6,3,5],
[3,4,5,2,8,6,1,7,9]] */