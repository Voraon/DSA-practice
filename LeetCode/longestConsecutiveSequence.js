class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;

        for (let num of set) {
            // Check if it's the start of a sequence
            if (!set.has(num - 1)) {
                let currentNum = num;
                let count = 1;

                // Count consecutive numbers upwards
                while (set.has(currentNum + 1)) {
                    currentNum++;
                    count++;
                }

                res = Math.max(res, count);
            }
        }

        return res;
    }
}

class Solution2 {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       const set = new Set(nums);
       let res =0;

        for(let num of nums){
            if(set.has(num) && !set.has(num-1)){
                let count=0;
                let curr= num;
               
                while(set.has(curr)){
                    set.delete(curr);
                    count++;
                    curr++;
                }
                res = Math.max(res, count);
                
            }
        }

        return res;

    }
}
