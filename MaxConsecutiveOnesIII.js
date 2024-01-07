/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let firstZero = null
    let rightPointer = 0
    let leftPointer = 0
    let zeroCounter = 0
    let max = 0
    while(rightPointer < nums.length ){
        
        if(nums[rightPointer] == 0){
            zeroCounter++
            if(zeroCounter > k){
                
                
                while(nums[leftPointer] != 0){
                    leftPointer++
                }
                leftPointer++
                rightPointer++
                zeroCounter--
            }
            else{
                rightPointer++
            }
        }
        else {
            rightPointer++
        }

        if(rightPointer - leftPointer > max){
            max = rightPointer - leftPointer 
        }
      
       
    }
    return max

    
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2))