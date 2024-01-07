//Longest Substring Without Repeating Characters

var lengthOfLongestSubstring = function(s) {
    let reccurent = {};
    let longestSubstring  = 0;
    let start = 0;
    for (let i =0 ;i<s.length;i++){
        
        if(reccurent[s.charAt(i)] == null){
            reccurent[s.charAt(i)] = i
    
        }
        else{
            if(reccurent[s.charAt(i)] < start){
                reccurent[s.charAt(i)] = i
           

            }else{
                start = reccurent[s.charAt(i)] + 1
                reccurent[s.charAt(i)] = i
           
            }
        }
        if(i - start + 1 > longestSubstring){
            longestSubstring = i - start + 1
        }

    }
    return longestSubstring
    
};

console.log(lengthOfLongestSubstring("dvdf"))