
/**
 * @param {number} [initialValue=0]
 * @returns {() => number}
 */
export default function makeCounter(initialValue = 0) {
  let count = initialValue;
  return function(){
    return count++;
  }
}

const counter = makeCounter(5);
console.log(counter()); // 5
console.log(counter()); // 5