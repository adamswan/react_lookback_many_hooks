import { useState, useMemo } from "react";

function App() {
  const [conut, setConut] = useState(0);

  const val = useMemo(() => {
    console.log("重新计算了");
    return "高圆圆" + conut;
  }, [conut]);

  return (
    <div style={theStyles}>
      <div>当前count: {conut}</div>
      <div>基于count的名字：{val}</div>

      <button onClick={() => setConut((old) => old + 1)}>增加count</button>
    </div>
  );
}

const theStyles = { padding: "20px", backgroundColor: "#f0e68c", height: "300px", width: "400px" };

export default App;
