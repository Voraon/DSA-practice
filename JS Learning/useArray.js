/**
 * @template T
 * @param {T[]} defaultValue
 */
export default function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    const push= useCallback((item) => {
        setArray((prevArray) => [...prevArray, item]);
    }, []);

    const update= useCallback((index, newItem) => {
        setArray((prevArray) => {
            const newArray = [...prevArray];
            newArray[index] = newItem;
            return newArray;
        });
    }, []);

    const remove= useCallback((index) => {
        setArray((prevArray) => {
            const newArray = [...prevArray];
            newArray.splice(index, 1);
            return newArray;
        });
    }, []);

    const filter= useCallback((predicate) => {
        setArray((prevArray) => prevArray.filter(predicate));
    }, []);

    const set= useCallback((newArray) => {
        setArray(newArray);
    }, []);

    const clear= useCallback(() => {
        setArray([]);
    }, []);

    return {array, push, update, remove, filter, set, clear};
}

const defaultValue = ['apple', 'banana'];

export default function Component() {
  const { array, push, update, remove, filter, set, clear } =
    useArray(defaultValue);

  return (
    <div>
      <p>Fruits: {array.join(', ')}</p>
      <button onClick={() => push('orange')}>Add orange</button>
      <button onClick={() => update(1, 'grape')}>
        Change second item to grape
      </button>
      <button onClick={() => remove(0)}>Remove first</button>
      <button onClick={() => filter((fruit) => fruit.includes('a'))}>
        Keep fruits containing 'a'
      </button>
      <button onClick={() => set(defaultValue)}>Reset</button>
      <button onClick={clear}>Clear list</button>
    </div>
  );
}
