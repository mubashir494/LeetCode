/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums1_pointer = 0
    let nums2_pointer = 0
    let isEven = (nums1.length + nums2.length) % 2  == 0 ? true : false 
    let median_found = false
    let result = []
    while(median_found == false){
        if(nums1[nums1_pointer] != null && nums2[nums2_pointer] != null){
            if(nums1[nums1_pointer] <= nums2[nums2_pointer]){
                console.log("Block 1")
                result.push(nums1[nums1_pointer])
                nums1_pointer++
            }
            else {
                console.log("Block 2 ")
                result.push(nums2[nums2_pointer])
                nums2_pointer++
            }
        }
        else {
            if(nums1[nums1_pointer] == null){
                console.log("Block 3")
                result.push(nums2[nums2_pointer])
                nums2_pointer++
            }
            else{
                console.log("Block 4")
                result.push(nums1[nums1_pointer])
                nums1_pointer++
            }
        }
        
        // Median Found
        if(result.length > (nums1.length + nums2.length)/2){
            median_found = true
        }
    }
    console.log(result)
    if(isEven == true){
        return (result[result.length - 1] +  result[result.length - 2])/2
    }
    else{
        return result[result.length - 1] 
    }

};

console.log(findMedianSortedArrays([0,0,0,0,0],[-1,0,0,0,0,0,1]))