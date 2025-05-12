const fibonacci = function(num) {
    num = Number(num);
    
    if (num === 0){
        return 0;
    }

    if (num < 0){
        return "OOPS";
    }

    let a=0;
    let b=1;

    for (let i=1; i<num; i++){
        let c= a+b;
        a=b;
        b=c;
    }
    return b;

};

// Do not edit below this line
module.exports = fibonacci;