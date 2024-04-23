
// Ref= https://leetcode.com/problems/length-of-last-word/

var lengthOfLastWord = function (s) {
    //converting string to array
    const arr = s.split(' ');
    //storing values of string
    const arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > 0) {
            arr1.push(arr[i])
        }
    }
    //returning length of last word of string
    return arr1[arr1.length - 1].length
};