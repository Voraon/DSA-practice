    /**
     * @param {number[]} nums
     * @return {number}
     */
  function findMin(nums) {
        let len = nums.length;
        let l = 0;
        let r = len-1;
        let result = nums[0];
        while(l <= r){

            if(nums[l] < nums[r])
                return Math.min(result, nums[l]);

            let mid = l+Math.floor((r-l)/2);
           result = Math.min(result, nums[mid]);
            if(nums[mid]>= nums[l]){
                l = mid+1;
            }else r =mid-1;
        }
        return result;
    }

    // const nums=[9,-5,-2,0,3];
    const nums=[4,5,6,7,0,1,2];

    console.log(findMin(nums));