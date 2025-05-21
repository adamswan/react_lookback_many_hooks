import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  console.log("组件渲染了");

  function handleClick() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((old) => old + 1);
    setCount((old) => old + 1);
    setCount((old) => old + 1);
  }

  return (
    <div>
      <div>当前count: {count}</div>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default App;
