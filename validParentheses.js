function validParentheses(parens) {
    let opened = 0
    for( let i = 0; i < parens.length; i++ ){
        if(parens[i] === '('){
            opened += 1
        }else{
            opened -= 1
            if( opened < 0 ) return false
        }
    }
    return opened === 0;
}