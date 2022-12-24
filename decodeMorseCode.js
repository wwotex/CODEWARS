decodeMorse = function(morseCode){
    let answer = ''
    let words = morseCode.trim().split("   ")
    for( let i = 0; i < words.length; i++ ){
        let letters = words[i].split(" ")
        for( let j = 0; j < letters.length; j++ ){
            answer += MORSE_CODE[letters[j]]
        }
        answer += ' '
    }
    return answer.trim()
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))

/*
decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
*/