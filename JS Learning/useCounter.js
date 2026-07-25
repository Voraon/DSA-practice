import { useCallback, useState } from 'react';

/**
 * @typedef {{
 *   count: number,
 *   increment: () => void,
 *   decrement: () => void,
 *   reset: () => void,
 *   setCount: import('react').Dispatch<import('react').SetStateAction<number>>,
 * }} UseCounterReturn
 */

/**
 * @param {number} [initialValue=0]
 * @returns {UseCounterReturn}
 */
export default function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const decrement = useCallback(() => {
        setCount((prevCount) => prevCount - 1);
    }, []);

    const reset = useCallback(() => {
        setCount(initialValue);
    }, [initialValue]);

    return { count, increment, decrement, reset, setCount };
}

