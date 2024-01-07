/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = []
    let result = ''
    for(let i = 0;i<s.length;i++){
        stack.push(s.charAt(i))
    }
    let counter = 0
    while(stack.length != 0){
        let el = stack.pop()
        
        if(el == '*'){
            counter++
        }
        else{
            if(counter > 0){
                counter--
            }
            else{
                result = el +  result 
            }
        }

    }
    return result






    
};