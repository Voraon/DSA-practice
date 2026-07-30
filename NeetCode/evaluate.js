
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    function evalRPN(tokens) {
        const stack =[];
        let len = tokens.length;
        for(let i =0;i< len; i++){
        
            if(tokens[i] ==='+'){
                let n1 = Number(stack.pop());
                let n2 = Number(stack.pop());
                let result = n1 + n2;
                stack.push(result);
            }
          else if(tokens[i] === '-' ){
                let n1 = Number(stack.pop());
                let n2 = Number(stack.pop());
                let result = n2-n1;
                stack.push(result);
            }
          else if(tokens[i] === '*'){
                let n1 = Number(stack.pop());
                let n2 = Number(stack.pop());
                let result = n1 * n2;
                stack.push(result);
            }
            else if(tokens[i] === '/'){
                    let n1 = Number(stack.pop());
                let n2 = Number(stack.pop());
                let result = n2 /n1;

                // console.log(result)
                stack.push(Math.trunc(result));
            }
            else stack.push(tokens[i]);
        }
        return stack.at(-1);
    }
// const tokens=["1","2","+","3","*","4","-"];
const tokens=["4","13","5","/","+"]
console.log(evalRPN(tokens));

//https://neetcode.io/problems/evaluate-reverse-polish-notation/question


