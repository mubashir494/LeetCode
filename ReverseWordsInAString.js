/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim()
    let arr = s.split(" ")
    console.log(arr)
    let result = ''
    for(let i = arr.length - 1;i>=0;i--){
        if(arr[i] != ''){
            if(i == 0){
                result = result + arr[i]
            }
            else {
                result = result + arr[i] + " "
            }

        }
    }

    return result
    
};