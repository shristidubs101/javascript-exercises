const removeFromArray = function(array) {
    if (!Array.isArray(array)) return array;

    const valuesToRemove= Array.prototype.slice.call(arguments,1);

    for (let i = array.length-1; i>=0; i--){
        if (valuesToRemove.includes(array[i])){
            array.splice(i,1);
        }
    }
    return array;
};

console.log(removeFromArray([1,2,3,4,5],3,4))

// Do not edit below this line
module.exports = removeFromArray;
                    