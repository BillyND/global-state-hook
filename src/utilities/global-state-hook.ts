import { useEffect, useState } from "react";

type State = Record<string, JSON>;

type Store = {
  getState: () => State;
  setState: (newState: ((prevState: State) => State) | State) => void;
  subscribe: (listener: () => void) => () => void;
};

export const createGlobalState = (initialState: State): Store => {
  let state: State = initialState;
  const listeners: Set<() => void> = new Set();

  const getState = (): State => state;

  const setState = (newState: ((prevState: State) => State) | State): void => {
    const updatedState =
      typeof newState === "function"
        ? newState(state)
        : typeof newState === "object"
        ? { ...state, ...newState }
        : newState;

    if (compareStateChanged(state, updatedState)) return;

    state = updatedState;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void): (() => void) => (
    listeners.add(listener), () => listeners.delete(listener)
  );

  return { getState, setState, subscribe };
};

export const useGlobalState = (store: Store) => {
  const [state, setState] = useState<State>(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return unsubscribe;
  }, [store]);

  return {
    state,
    setState: store.setState,
  };
};

const compareStateChanged = (state: State, newState: State): boolean => {
  return JSON.stringify(newState) === JSON.stringify(state);
};
