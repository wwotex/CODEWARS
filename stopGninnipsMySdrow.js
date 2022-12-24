function spinWords(string){
  let ls = string.split(' ')
  for(let i = 0; i < ls.length; i++ ){
    if(ls[i].length >= 5){
      ls[i] = ls[i].split("").reverse().join("")
    }
  }
  return ls.join(" ")
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords( "This is another test" ))