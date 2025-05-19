import { useState } from "react";
import Son1 from "./components/Son1";

function App() {
  console.log("父组件渲染了");

  const [show, setShow] = useState(true);

  return (
    <div style={theStyles}>
      <p>我是父组件</p>
      <button onClick={() => setShow(false)}>销毁子组件</button>

      {show && <Son1 />}
    </div>
  );
}

const theStyles = { padding: "20px", backgroundColor: "#f0e68c", height: "300px", width: "200px" };

export default App;
