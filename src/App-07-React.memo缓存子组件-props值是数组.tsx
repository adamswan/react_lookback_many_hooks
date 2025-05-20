import { useState, useMemo } from "react";
import Son4 from "./components/Son4";

function App() {
  console.log("父组件渲染了");

  const [conut, setConut] = useState(0);

  // 1. 如果这样写，ids数组的地址会随App组件的重新渲染而变化，
  // 从而导致子组件重新渲染
  // const ids = [1, 2, 3];

  // 2. 所以要用 useMemo() 缓存数组的地址
  const ids = useMemo(() => [1, 2, 3], []);

  return (
    <div style={theStyles}>
      <div>我是父组件</div>

      <div>当前count: {conut}</div>

      <button onClick={() => setConut((old) => old + 1)}>增加count</button>

      <Son4 ids={ids} />
    </div>
  );
}

const theStyles = { padding: "20px", backgroundColor: "#f0e68c", height: "300px", width: "400px" };

export default App;
