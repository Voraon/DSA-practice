class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Set();
        const col = new Set();
        const boxes = Array.from({ length: 9 }, () => new Set());

        //check for row duplication
        for(let i =0 ;i < 9; i++){
           for(let j =0; j < 9; j++){
             const val = board[i][j];
              if(val ==='.') continue;
            if(row.has(val)){
                return false;
            }
            row.add(val);
           }
           row.clear();
        }

        //check for column duplication
        for(let i=0; i< 9; i++){
            for( let j=0; j<9 ; j++){
                 const val = board[j][i];
                  if(val ==='.') continue;
                if(col.has(val)){
                    return false;
                }
                col.add(val);
            }
            col.clear();
        }

        //check for 3x3 box
        for( let r = 0; r<9; r++){
            for( let c = 0; c < 9 ; c++){
                const val = board[r][c];

                if(val ==='.') continue;

                const boxId = Math.floor(r/3)*3 + Math.floor(c/3);

                if(boxes[boxId].has(val)) return false;
                boxes[boxId].add(val);
            }
        }

        return true;
    }
}
