/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vowels = ['a','e','i','o','u']
    let startPointer = 0
    let endPointer = 0
    let vowelCounter = 0
    let max = 0
    let start= s.charAt(startPointer)
    while(endPointer <= s.length - 1){
        if(vowels.includes(s.charAt(endPointer))){
            vowelCounter++
        }
        // Sliding 
        if(endPointer - startPointer + 1 == k){

            if(vowelCounter > max){
                max = vowelCounter
            }
            
            if(vowels.includes(start)){
                vowelCounter--
            }
            startPointer++
            start = s.charAt(startPointer)
            endPointer++
        }
        // Not sliding
        else {
            endPointer++
        }
    }
    return max
    
};

