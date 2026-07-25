/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {import("react").DependencyList} deps
 */
export default function useQuery(fn, deps = []) {
    const [state, setState] = useState({status:'Loading'});

    useEffect(() => {
            setState({status:'loading'});

          let isMounted = true;

        
            const fetchData = async () => {
            try {
                const data = await fn();
                if(isMounted){

                setState({status:'success', data});
                }
            } catch (error) {
                if(isMounted){
                setState({status:'error', error});}
            }
        };

          
        
        fetchData();
         return () => {
      isMounted = false;
    };
    }, deps);

    return state;
}
import { useEffect, useState } from 'react';

/**
 * @template T
 * @param {() => Promise<T>} fn
 * @param {import("react").DependencyList} deps
 */
export default function useQuery(fn, deps = []) {
  const [state, setState] = useState({
    status: 'loading',
  });

  useEffect(() => {
    // Reset status to loading when dependencies change
    setState({ status: 'loading' });

    let isMounted = true;

    fn()
      .then((data) => {
        // Prevent state updates if unmounted or if deps changed before this promise resolved
        if (isMounted) {
          setState({
            status: 'success',
            data,
          });
        }
      })
      .catch((error) => {
        if (isMounted) {
          setState({
            status: 'error',
            error,
          });
        }
      });

    // Cleanup function runs on unmount or before re-running the effect
    return () => {
      isMounted = false;
    };
  }, deps);

  return state;
}

import { useState, useEffect } from 'react';

export default function useQuery(fn, deps = []) {
  const [state, setState] = useState({
    status: 'loading',
  });

  useEffect(() => {
    // Reset status to loading when dependencies change
    setState({ status: 'loading' });

    let isMounted = true;

    const fetchData = async () => {
      try {
        const data = await fn();
        
        // Prevent state updates if unmounted or if deps changed before this promise resolved
        if (isMounted) {
          setState({
            status: 'success',
            data,
          });
        }
      } catch (error) {
        if (isMounted) {
          setState({
            status: 'error',
            error,
          });
        }
      }
    };

    fetchData();

    // Cleanup function runs on unmount or before re-running the effect
    return () => {
      isMounted = false;
    };
  }, deps);

  return state;
}