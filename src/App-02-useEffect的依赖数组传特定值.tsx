import { useState, useEffect } from "react";

function App() {
  console.log("组件渲染了");

  const [name, setName] = useState("高圆圆");

  useEffect(() => {
    console.log("useEffect的回调执行");
  }, [name]);

  return (
    <>
      <div>
        <p>当前名字：{name}</p>
        <button onClick={() => setName((old) => old + "圆")}>改名</button>
      </div>
    </>
  );
}

export default App;
