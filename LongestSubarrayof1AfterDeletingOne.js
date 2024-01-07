/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {

    let leftPointer = 0
    let rightPointer = 0
    let max = 0
    let zeroCount = 0

    while(rightPointer < nums.length){
        if(nums[rightPointer] == 0){
            zeroCount++
            if(zeroCount > 1){
                while(nums[leftPointer] != 0){
                    leftPointer++
                }
                leftPointer++
                rightPointer++
                
            }
            else{
                zeroExist = true
                rightPointer++
            }
            
        }
        else{
            rightPointer++

        }
        if(rightPointer - leftPointer > max){
            max = rightPointer - leftPointer 
        }

    }
    return max

    
};