
    /**
     * @param {string} s
     * @return {boolean}
     */
    function isValid(s) {
        const stack = [];
        let n = s.length

        for( let currValue of s){
            let len = stack.length-1;
          
            if(currValue ===')' && stack[len] ==='('){
                stack.pop();
            }else if(currValue ==='}' && stack[len] ==='{'){
                stack.pop();
            }else if(currValue ===']' && stack[len] === "["){
                stack.pop();
            }else stack.push(currValue);

        }

        return stack.length ===0;

    }

    const s = "([{}])";
   console.log( isValid(s))
