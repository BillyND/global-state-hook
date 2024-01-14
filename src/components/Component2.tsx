import { testExternalStore } from "../App";
import { useStore } from "../utilities/external-store";
import { useGlobalState } from "../utilities/global-state-hook";

function Component2() {
  const { state, setState } = useGlobalState(testExternalStore);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            setState(() => ({
              oki: 1111,
            }));
          }}
        >
          Function
        </button>
        <button
          onClick={() => {
            setState({
              oki: 2222,
            });
          }}
        >
          Object
        </button>

        <button
          onClick={() => {
            setState(3333);
          }}
        >
          Number
        </button>

        <button
          onClick={() => {
            setState("4444");
          }}
        >
          String
        </button>
      </div>

      <hr />

      <button
        onClick={() => {
          setState((prev) => ({
            oki: prev.oki + 1 || 0,
          }));
        }}
      >
        Function
      </button>

      <button
        onClick={() => {
          setState({
            oki: state.oki + 1 || 0,
          });
        }}
      >
        Object
      </button>

      <button
        onClick={() => {
          setState(state + 1 || 0);
        }}
      >
        Number
      </button>

      <button
        onClick={() => {
          setState(Math.random().toString());
        }}
      >
        String
      </button>
    </div>
  );
}

export default Component2;
