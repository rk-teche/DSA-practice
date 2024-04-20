// Ref: https://leetcode.com/problems/reverse-words-in-a-string/

/**
 * approach One:
 */
var reverseWords = function(s) {
    if(!s) return;
      let i = s.length - 1, j = s.length -1;
      let reverseString = ""
    while(i >= 0)
    {
        if(s[i] && s[i].trim())
        {
            i--
        }
        else
        {
            // new word
            const word = s.substring(i+1, j+1).trim();
            reverseString = addString(reverseString, word) 
            i--;
            j = i;
        }
    }
    const word = s.substring(i+1, j+1).trim();
    reverseString = addString(reverseString, word)
    return reverseString
  };
  
  
  function addString(reverseString, word)
  {
      if(word)
          reverseString = `${reverseString ? `${reverseString} ` : reverseString}${word}`;
  
      return reverseString;    
  }


/**
 * approach Two:
 */

var reverseWords = function(s) {
    return s.trim().split(" ").reverse().filter(word => word.length != 0).join(" ")
};