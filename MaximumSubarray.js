/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0]
    let result = nums[0] 
    for(let i = 1;i<nums.length;i++){
        if(nums[i] > result ) {
            result = nums[i]
        }
        else{
            result = result + nums[i]
        }
        if(result > max) {
            max = result
        }
    }
    return max



    
};

