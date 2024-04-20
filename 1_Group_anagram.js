// Ref: https://leetcode.com/problems/group-anagrams/

// Approach One

function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // Sort each string to form the key
        const sorted = str.split('').sort().join('');
        
        // If the key exists, append to the existing array
        if (map.has(sorted)) {
            map.get(sorted).push(str);
        } else {
            // Otherwise, create a new array for this key
            map.set(sorted, [str]);
        }
    }
    
    // Convert the map values to an array
    return Array.from(map.values());
}

// Approach Two

var groupAnagrams = function(strs) 
{
    const grouped = [];
    for(let i = 0; i < strs.length; i++)
    {
        const anagramArray = [strs[i]]
        grouped.push(anagramArray)
        const newArray = [];
        for(let j = i+1; j < strs.length; j++)
        {
            if(isAnagram(strs[i], strs[j]))
            {
                anagramArray.push(strs[j])
            }
            else
            {
                newArray.push(strs[j])
            }
        }
        strs = newArray
        i = i-1
    }

    return grouped;
};

var isAnagram = function(s, t) 
{
    let lettersCount = new Map();

    for(let i of s)
    {   
        if(lettersCount.has(i))
        {
            const newCount = lettersCount.get(i) + 1
            lettersCount.set(i, newCount)
        }
        else
        {
            lettersCount.set(i, 1)
        }
    }

    for(let i of t)
    {
        if(lettersCount.has(i))
        {
            const newCount = lettersCount.get(i) - 1
            if(newCount < 0) return false;
            lettersCount.set(i, newCount)
        }
        else
            return false
    }

    let count = 0;
    lettersCount.forEach((value, key) => count += value)

    return count === 0
};