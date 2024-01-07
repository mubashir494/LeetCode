/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
  let Map = {}
  let result = 0
  for (let i = 0;i<nums.length;i++){
    let temp = k - nums[i]
    if(Map[temp] != null){
        result++
        if(Map[temp] == 1){
            Map[temp] = null
        } 
        else {
            Map[temp] = Map[temp] - 1
        }
    }
    else{
        if(Map[nums[i]] == null){
            Map[nums[i]] = 1

        }
        else{
            Map[nums[i]] = Map[nums[i]] + 1

        }

    }
  }
  return result
    
};