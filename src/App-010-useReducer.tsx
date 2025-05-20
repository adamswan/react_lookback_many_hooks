import { useReducer } from "react";

function App() {
  type ActionType = {
    type: "add" | "cut" | "addBig";
    payload?: number;
  };

  function fn(state: number, action: ActionType) {
    if (action.type === "add") {
      // 增加1
      return state + 1;
    } else if (action.type === "cut") {
      // 减少1
      return state - 1;
    } else if (action.type === "addBig") {
      // 增加 payload 指定的值
      return state + action.payload!;
    }
    return state;
  }

  const [conut, dispatch] = useReducer(fn, 0);

  return (
    <div style={theStyles}>
      <div>当前count: {conut}</div>
      <button onClick={() => dispatch({ type: "add" })} style={mr}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "cut" })} style={mr}>
        -1
      </button>
      <button onClick={() => dispatch({ type: "addBig", payload: 5 })} style={mr}>
        一口气加5
      </button>
    </div>
  );
}

const theStyles = { padding: "20px", backgroundColor: "#f0e68c", height: "300px", width: "400px" };

const mr = { marginRight: "10px" };

export default App;
