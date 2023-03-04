const reverseString = function(word) {
    let reverse = '';
    let temp = word;
    for (let i = 0; i < word.length; i++){
        reverse += temp[temp.length - 1];
        temp = temp.slice(0, -1);
    }
    return reverse;
}

// Do not edit below this line
module.exports = reverseString;
