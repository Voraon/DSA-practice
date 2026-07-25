    /**
 * @typedef {{
 *   value: boolean,
 *   setTrue: () => void,
 *   setFalse: () => void,
 * }} UseBooleanReturn
 */

/**
 * @param {boolean} [initialValue=false]
 * @returns {UseBooleanReturn}
 */
export default function useBoolean(initialValue) {
   const [value,setValue] = useState(intialValue??false);

   const setTrue= useCallback(()=> setValue(true),[]);

   const setFalse= useCallback(()=> setValue(false),[]);
   
   return {value,setTrue,setFalse};
}
