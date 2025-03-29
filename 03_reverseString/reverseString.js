const reverseString = function(str) {
    
    let result='';
    for (i in str)
    {
        result= str[i] + result;
    }
    return result;
};

let str='hello'
console.log(reverseString(str))

// Do not edit below this line
module.exports = reverseString;
