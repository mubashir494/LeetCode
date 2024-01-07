/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let point1 = 0
    let point2 = height.length - 1
    let MaxArea = 0
    while(point1 < point2){
        let currentArea = Math.min(height[point1],height[point2]) * (point2 - point1)
        if(currentArea > MaxArea){
            MaxArea = currentArea
        }
        if(height[point1] >= height[point2]){
            point2--
        }
        else{
            point1++
        }
    }
    return MaxArea
    
};