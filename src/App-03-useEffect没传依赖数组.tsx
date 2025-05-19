import { useState, useEffect } from "react";

function App() {
  console.log("组件渲染了");

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    console.log("useEffect的回调执行");
  });

  return (
    <>
      <div>
        <p>当前时间戳：{time}</p>
        <button onClick={() => setTime(Date.now())}>更新时间戳</button>
      </div>
    </>
  );
}

export default App;
