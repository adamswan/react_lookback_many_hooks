import { useState } from "react";

function App() {
  const [name, setName] = useState("高圆圆1");

  function handleClick() {
    // setName 是异步任务
    setName("高圆圆2");
    setName("高圆圆3");
    setName("高圆圆4");

    // console 是同步任务
    console.log("打印name", name); // '高圆圆1'
  }

  return (
    <div>
      <div>当前名字: {name}</div>
      <button onClick={handleClick}>改名字</button>
    </div>
  );
}

export default App;
