/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let stack = []
    let vowels = ['a','e','i','o','u']
    let result = ''
    for (let i =0;i<s.length;i++){
        if(vowels.includes(s.charAt(i).toLowerCase())){
            stack.push(s.charAt(i))
        }
    }

    for (let j = 0;j<s.length;j++){
        if(vowels.includes(s.charAt(j).toLowerCase())){
            result = result + stack.pop()
            
        }else{
            result = result + s.charAt(j)

        }

    }

    return result

    


    
};