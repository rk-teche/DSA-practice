// Remove dublicate from sorted Array
// Like you need to shift all the unique elements at starting of array rest of element needs to shift at end


function removeDublicate(nums){
    let j=1;
    for(let i=1; i<nums.length;i++){
        if(nums[i]!=nums[i-1]){
            nums[j+1]= nums[i]
        }
    }
    return j
}

removeDublicate([1,1,2])