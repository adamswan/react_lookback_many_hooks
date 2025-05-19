import { useState, useEffect } from "react";

function App() {
  console.log("组件渲染了");

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect的回调执行");
  }, []);

  return (
    <>
      <div>
        <p>当前计数：{count}</p>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </>
  );
}

export default App;
