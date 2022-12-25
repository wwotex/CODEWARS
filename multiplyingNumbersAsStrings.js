function multiply(num1, num2)
{
    let len1 = num1.length;
    let len2 = num2.length;
    if (len1 == 0 || len2 == 0)
        return "0"
 
    // will keep the result number in vector
    // in reverse order
    let result = new Array(len1 + len2).fill(0)
     
    // Below two indexes are used to
    // find positions in result.
    let i_n1 = 0
    let i_n2 = 0
 
    // Go from right to left in num1
    for (var i = len1 - 1; i > -1 ; i --)
    {
        let carry = 0
        let n1 = (num1[i]).charCodeAt(0) - 48
 
        // To shift position to left after every
        // multiplication of a digit in num2
        i_n2 = 0
 
        // Go from right to left in num2
        for (var j = len2 - 1; j > -1; j--)
        {
            // Take current digit of second number
            let n2 = (num2[j]).charCodeAt(0) - 48
         
            // Multiply with current digit of first number
            // and add result to previously stored result
            // at current position.
            let summ = n1 * n2 + result[i_n1 + i_n2] + carry
 
            // Carry for next iteration
            carry = Math.floor(summ / 10)
 
            // Store result
            result[i_n1 + i_n2] = summ % 10
 
            i_n2 += 1
        }
 
        // store carry in next cell
        if (carry > 0)
            result[i_n1 + i_n2] += carry
 
        // To shift position to left after every
        // multiplication of a digit in num1.
        i_n1 += 1
         
        // print(result)
    }
    // ignore '0's from the right
    i = result.length - 1
    while (i >= 0 && result[i] == 0)
        i -= 1
 
    // If all were '0's - means either both or
    // one of num1 or num2 were '0'
    if (i == -1)
        return "0"
 
    // generate the result string
    let s = ""
    while (i >= 0)
    {
        s += String.fromCharCode(result[i] + 48)
        i -= 1
    }
 
    return s
    }


let a = '10000214124'
let b = '1000000002145410'
console.log(multiply(a, b))