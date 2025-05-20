import { useState } from "react";
import Son2 from "./components/Son2";

function App() {
  console.log("父组件渲染了");

  const [conut, setConut] = useState(0);

  const name = "高圆圆";

  return (
    <div style={theStyles}>
      <div>我是父组件</div>
      <div>当前count: {conut}</div>
      <button onClick={() => setConut(conut + 1)}>+1</button>

      <Son2 name={name} />
    </div>
  );
}

const theStyles = { padding: "20px", backgroundColor: "#f0e68c", height: "300px", width: "400px" };

export default App;
