const repeatString = function(str,num) {
    if (num>=0){
        let result=''
        for (i=0; i<num; i++){
            result+=str;
        }
        return result;

    }else{return 'ERROR'} 
};

let str='hey';
let num=3;
console.log(repeatString(str,num));

// Do not edit below this line
module.exports = repeatString;
