class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i =0;
        let j = heights.length-1;
        let result =0;

        while(i<j){
            let water = (j-i)*Math.min(heights[i], heights[j]);

            // no need to check for equal heights, just move the pointer of either;
            // if(heights[i]=== heights[j]){
            //    if(heights[i+1]> heights[j-1]){
            //     j--;
            //    }else i++;
            // }else if(heights[i]> heights[j]) j--;
            // else i++;

            if(heights[i]>= heights[j]) j--;
            else i++;


            result= Math.max(water, result);

        }
        return result
    }
}
