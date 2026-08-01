
    // /**
    //  * @param {number[][]} matrix
    //  * @param {number} target
    //  * @return {boolean}
    //  */
    
    // function searchMatrix(matrix, target) {
    //     let ROWS = matrix.length;
    //     let COLS = matrix[0].length;
    
    
    //     for(let i = 0 ; i< ROWS; i++){
    //         if( matrix[i][0] <= target && target <= matrix[i][COLS-1]){
    //             let start = 0;
    //             let end = COLS-1;
    //             while(start<= end){
    //                  let mid = start + Math.floor((end-start)/2);
    //                  if(target === matrix[i][mid]) return true;
    //                  if(target > matrix[i][mid]) start =mid+1;
    //                  else end = mid-1;
    //             }
               
                 
    //         }
    //     }
    //     return false;

    // }
   
   function searchMatrix(matrix, target) {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;
        
        let top=0;
        let bot = ROWS -1;

        while(top <= bot){
            let row = Math.floor((bot+top)/2);
            if(target > matrix[row][COLS-1]) top = row+1;
            else if(target < matrix[row][0]) bot = row-1;
            else break;
        }
        if(top>bot) return false;

        let row = Math.floor((top+bot)/2);

        let l =0;
        let r = COLS-1;
        while(l <=r){
            let mid = l + Math.floor((r-l)/2);
            if(target === matrix[row][mid]) return true;
            if(target > matrix[row][mid]){
                l= mid+1;
            }else r= mid-1;
        }
        return false;

    }

//    const  matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
//     const target=13;

    // const matrix=[[1,3]]
    // const target=3

    const matrix=[[1],[3]]
    const target=1

    // const matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]]
    // const target=3

    console.log(searchMatrix(matrix, target));


