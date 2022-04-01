import { useState, useEffect } from "react";

const createStore = (initialStore) => {
  let store = initialStore;
  const listeners = new Set();

  const dispatch = (action) => {
    store = typeof action === "function" ? action(store) : action;
    listeners.forEach((listener) => listener(() => store));
  };

  const useStore = () => {
    const [, listener] = useState();
    useEffect(() => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    }, []);
    return store;
  };

  return [useStore, dispatch];
};

export default createStore;
