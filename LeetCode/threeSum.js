class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
      let result = [];
      let i =1;
      let j=0;
      let k = nums.length-1;
      const sortedNums = nums.sort();
      for(i =1 ; i < nums.length -1; i++){
        let target = -sortedNums[i];
        if(i === j && j=== k) continue;
        if(target> (sortedNums[j]+ sortedNums[k])){
            k--;
        }else if(target < (sortedNums[j]+ sortedNums[k])){
            j++;
        }else if(target === sortedNums[j]+ sortedNums[k]){
            result.push([sortedNums[i],sortedNums[j],sortedNums[k]]);
        }
       
        
      }

      return result;

    }
}
