const palindromes = function (str) {
    let revStr="";
    let newStr = str.toLowerCase().replace(/[\s\W]/g, "");
    
    for(let i = newStr.length-1; i>=0; i--){
        revStr = revStr + newStr[i];
    }

    return revStr === newStr;
};

// Do not edit below this line
module.exports = palindromes;
