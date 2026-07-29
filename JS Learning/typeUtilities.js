/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isBoolean(value) {
  if( typeof(value)=== "boolean")
    return true;
  return false;
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNumber(value) {
  return typeof(value)==='number'? true: false;
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isNull(value) {

 return value === null;
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isString(value) {
  return typeof(value) ==='string'? true:false;
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isSymbol(value) {
return typeof value === 'symbol';
}

/**
 * @param {unknown} value
 * @returns {boolean}
 */
export function isUndefined(value) {

  return typeof(value) ==='undefined'? true:false;
}