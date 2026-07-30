function  carFleet(target, position, speed) {
        const stack =[];
        let pair = position.map((value, index)=>[value, speed[index]]);
        pair.sort((a,b)=> b[0]-a[0]);

        for( let [p,s] of pair){
                let time = (target - p)/s;
                stack.push(time);
                if(stack.length>=2 && stack[stack.length-1]<= stack[stack.length-2]){
                    stack.pop();
                }
        }
        return stack.length;        
    }

    //https://neetcode.io/problems/car-fleet/question