function longest(s1, s2) {
    let D = new Set()
    for(let i = 0; i < Math.max(s1.length, s2.length); i++){
        if(s1[i]) D.add(s1[i])
        if(s2[i]) D.add(s2[i])
    }
    return Array.from(D).sort().join("")
}


a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
console.log(longest(a,b))
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a)

/*
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/