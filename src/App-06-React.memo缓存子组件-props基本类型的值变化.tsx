import { useState } from "react";
import Son3 from "./components/Son2";

function App() {
  console.log("父组件渲染了");

  const [conut, setConut] = useState(0);

  const [name, setName] = useState("高圆圆");

  function handleClick() {
    // 修改父组件的count,让父组件重新渲染
    setConut((old) => old + 1);
    // 修改传给子组件的 name, 让 props 变化,触发子组件的重新渲染
    setName((oldStr) => oldStr + "圆");
  }

  return (
    <div style={theStyles}>
      <div>我是父组件</div>
      <div>当前count: {conut}</div>
      <button onClick={handleClick}>增加count和修改名字</button>

      <Son3 name={name} />
    </div>
  );
}

const theStyles = { padding: "20px", backgroundColor: "#f0e68c", height: "300px", width: "400px" };

export default App;
