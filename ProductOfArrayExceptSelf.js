/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let result = []
    let suffixProduct = 1
    let prefixProduct = 1

    for (let i = 0;i<nums.length;i++){
        result[i] = suffixProduct
        suffixProduct = nums[i]*suffixProduct
    }
    for(let j = nums.length;j>=0;j--){
        result[j] = result[j] * prefixProduct
        prefixProduct = nums[j] * prefixProduct
    }
    console.log(result)

    return result



    
};


