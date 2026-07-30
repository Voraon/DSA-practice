
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    function dailyTemperatures(temperatures) {
        const stack = [];
        let len = temperatures.length;
        const result = new Array(len).fill(0);
       
        for(let i =0 ;i< len;i++){
            while(stack.length && temperatures[i]> temperatures[stack.at(-1)]){
                let index = stack.pop();
                result[index] = i-index;
            }
            stack.push(i);
        }
    
        return result;
    }

    const temperatures = [30,38,30,36,35,40,28];
    //Output: [1,4,1,2,1,0,0]

    console.log(dailyTemperatures(temperatures));

    //https://neetcode.io/problems/daily-temperatures/question

