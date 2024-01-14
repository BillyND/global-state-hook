import { useSyncExternalStore } from "react";

type State = Record<string, JSON>;

type Listener = () => void;

export const createStore = (initialState: State) => {
  let state: State = initialState;
  const getState = (): State => state;
  const listeners = new Set<Listener>();

  const setState = (newState: State | ((prevState: State) => State)) => {
    const updatedState =
      typeof newState === "function" ? newState(state) : newState;

    state =
      typeof updatedState === "object"
        ? { ...state, ...updatedState }
        : updatedState;

    listeners.forEach((listener) => listener());
  };

  const resetState = () => {
    state = initialState;
  };

  const subscribe = (listener: Listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe, resetState };
};

export const useStore = (store: ReturnType<typeof createStore>) => {
  const externalStore = useSyncExternalStore(
    store.subscribe,
    () => JSON.stringify(store.getState()),
    () => JSON.stringify(store.getState())
  );

  return {
    state: JSON.parse(externalStore) as State,
    setState: store.setState,
  };
};
