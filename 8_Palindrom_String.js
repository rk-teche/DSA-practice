https://leetcode.com/problems/valid-palindrome/

var isPalindrome = function (s) {
    const str= s.toLowerCase().replace(/[^a-z0-9]/gi,'');
    const reverse= str.split('').reverse().join('')
    console.log(str,reverse)
    return str===reverse

};