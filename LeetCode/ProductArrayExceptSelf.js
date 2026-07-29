
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = new Array(nums.length).fill(0);
    let suffix = new Array(nums.length).fill(0);
    let n = nums.length;
    prefix[0]= 1;
    suffix[n-1] = 1;
    for(let i =1; i< n;i++){
        prefix[i] = nums[i-1] * prefix[i-1];
    }

    for(let i=n-2;i >= 0; i--){
        suffix[i] = nums[i+1]* suffix[i+1];
        console.log(suffix[i]);
    }

    console.log(suffix);

    
};

productExceptSelf([1,2,3,4]);