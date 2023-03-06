const sumAll = function(firstNum, lastNum) {
    let newList = [];
    let largestNum = isBigger(firstNum, lastNum);
    let smallestNum = isSmaller(firstNum, lastNum);
    let count = smallestNum;
    if (isError(largestNum, smallestNum) === true ){
        return "ERROR";
    }
    for (let i = 0; i < (largestNum - 1); i++){
        let j = i + 1;
        let nextNum = smallestNum + j;
        newList.push(nextNum);
    }
    for (let j = 0; j < newList.length; j++){
        count += newList[j];
    }
    
    // let nextNum = firstNum;
    // let count = firstNum;
    // for (let i = 0; i < lastNum - 1; i++) {
    //     let j = i + 1;
    //     nextNum = firstNum + j;
    //     count += nextNum;
    // }
    // return count;
    return count;

};

function isBigger(numOne, numTwo){
    if (numOne >= numTwo) {
        return numOne;
    }
    else {
        return numTwo;
    }
}

function isSmaller(numOne, numTwo){
    if (numOne <= numTwo) {
        return numOne;
    }
    else {
        return numTwo;
    }
}

function isError(numOne, numTwo){
    if (numOne < 0 || numTwo < 0 || !(Number.isInteger(numOne)) || !(Number.isInteger(numTwo))) {
        return true;
    }
    else {
        return false
    }
}

// Do not edit below this line
module.exports = sumAll;
