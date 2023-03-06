const removeFromArray = function(myArray, ...args) {
    let newArray = args.filter(arg => myArray.includes(arg));
    for (let i = 0; i <= newArray.length - 1; i++) {
        let num = myArray.indexOf(newArray[i]);
        myArray.splice(num, 1);
    }
    return myArray;
        
};

// Do not edit below this line
module.exports = removeFromArray;

