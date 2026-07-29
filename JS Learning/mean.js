/**
 * @param {Array<number>} array
 * @returns {number}
 */
export default function mean(array) {
 const average = array.reduce((acc, curr)=>{
  return acc= acc+curr;
 }, 0);

 const n = array.length;


 return average/n;
}



mean([4, 2, 8, 6]); // => 5
mean([1, 2, 3, 4]); // => 2.5
mean([1, 2, 2]); // => 1.6666666666666667
mean([]);
