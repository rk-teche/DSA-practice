https://leetcode.com/problems/reverse-words-in-a-string/submissions/1239988496/


//reverse string with word 

const reverseWords =  (s)=> {
    const str = s.split(' ').reverse().filter((s1) => s1.length > 0).toString().replace(/,/g, ' ')
    return str
};

reverseWords()