/**
 * @param {(...args: Array<unknown>) => unknown} func
 * @param {number} wait
 * @returns {(...args: Array<unknown>) => void}
 */
export default function debounce(func, wait) {
 let timer;
 return function (...args){
  const context = this;
  clearTimeout(timer);
  timer= setTimeout(()=> func.apply(context,args), wait);
 }
}