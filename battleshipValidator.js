class Ship {
    static MAX_SIZE = 4

    constructor(x, y, field) {
        this.min_x = x
        this.max_x = x
        this.min_y = y
        this.max_y = y
        this.size = 0
        this.field = field
        this.search(x, y)
    }

    isValidCell(x, y) {
        // console.log('reading: ' + x + ' ' + y)
        if( x === -1 && y === 0 ){
            let a = 0
        }
        return (0 <= x && x < this.field.length && 0 <= y && y < this.field[0].length) && this.field[x][y] === 1 
    }

    isValidShip() {
        let x_size = this.max_x - this.min_x + 1
        let y_size = this.max_y - this.min_y + 1

        if( (x_size == 1 && 1 <= y_size && y_size <= Ship.MAX_SIZE) || (y_size == 1 && 1 <= x_size && x_size <= Ship.MAX_SIZE) ) return true
        
        return false
    }

    updateMax(x, y) {
        this.max_x = Math.max(this.max_x, x)
        this.max_y = Math.max(this.max_y, y)
        this.min_x = Math.min(this.min_x, x)
        this.min_y = Math.min(this.min_y, y)
    }

    search(x, y) {
        this.field[x][y] = 0
        this.size += 1
        this.updateMax(x, y)
        let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]]

        for( let d = 0; d < dirs.length; d++ ){
            if( this.isValidCell(x+dirs[d][0], y+dirs[d][1]) ) this.search(x+dirs[d][0], y+dirs[d][1])
        }
    }
}

function setsAreEqual(a, b) {
    if (a.size !== b.size) {
      return false;
    }
  
    return Array.from(a).every(element => {
      return b.has(element);
    });
}

function compareMaps(map1, map2) {
    var testVal;
    if (map1.size !== map2.size) {
        return false;
    }
    for (var [key, val] of map1) {
        testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;
}

function validateBattlefield(field) {
    let template = new Map()
    let current = new Map()
    template.set(1, 4);
    template.set(2, 3);
    template.set(3, 2);
    template.set(4, 1);

    for(let i = 0; i < 10; i++ ){
        for(let j = 0; j < 10; j++ ){
            if(field[i][j] === 1){
                let s = new Ship(i, j, field)
                if( !s.isValidShip() ) return false

                if( current.has(s.size) ){
                    current.set(s.size, current.get(s.size) + 1)
                } else {
                    current.set(s.size, 1)
                }
            }
        }
    }
    // console.log(current)
    // console.log(template)
    // console.log(compareMaps(current, template))
    return compareMaps(current, template)
}



battlefield = [
    [0, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

console.log(validateBattlefield(battlefield))