import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);

    // 2s 后，将回调放入队列中排队！
    setTimeout(() => {
      console.log("打印count", count);
    }, 1000);
  }

  return (
    <div>
      <div>当前count: {count}</div>
      <button onClick={handleClick}>+1</button>
    </div>
  );
}

export default App;
