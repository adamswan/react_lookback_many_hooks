import { useState, useCallback } from "react";
import Son5 from "./components/Son5";

function App() {
  console.log("父组件渲染了");

  const [conut, setConut] = useState(0);

  // 1. 如果这样写，函数的地址会随App组件的重新渲染而变化，
  // 从而导致子组件重新渲染
  function getName() {
    return "Hello from parent";
  }

  // 2. 所以要用 useCallback() 缓存函数的地址
  const newGetName = useCallback(getName, []);

  return (
    <div style={theStyles}>
      <div>我是父组件</div>

      <div>当前count: {conut}</div>

      <button onClick={() => setConut((old) => old + 1)}>增加count</button>

      <Son5 getName={newGetName} />
    </div>
  );
}

const theStyles = { padding: "20px", backgroundColor: "#f0e68c", height: "300px", width: "400px" };

export default App;
