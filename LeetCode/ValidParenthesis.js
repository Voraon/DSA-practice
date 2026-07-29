/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    const map = {};
    words.forEach((item)=>{
        if(map[item]){
            map[item]+=1;
        }else{
            map[item]=1;
        }
    })

    let arr = Object.entries(map).sort((a,b)=>{  if(a[1]===b[1]){
            return a[0].localeCompare(b[0]);
        }
        return b[1] - a[1];});
    // arr.sort((a,b)=>{
    //     if(a[1]===b[1]){
    //         return a[0].localeCompare(b[0]);
    //     }
    //     return b[1] - a[1];
    // });
    return arr.slice(0, k).map((item)=>(item[0]));
};
words = ["i","love","leetcode","i","love","coding"];
k=3;
console.log(topKFrequent(words, k));
