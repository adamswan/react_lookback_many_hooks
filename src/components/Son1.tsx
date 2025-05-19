import { useEffect } from "react";

function Son1() {
  // 放一个定时器
  const id = setInterval(() => {
    console.log("定时器执行");
  }, 1000);

  useEffect(() => {
    console.log("子组件useEffect的回调执行");

    return () => {
      // 清楚定时器
      clearInterval(id);
    };
  }, [id]);

  return (
    <div style={theStyles}>
      <p>我是子组件</p>
    </div>
  );
}

const theStyles = { backgroundColor: "#add8e6", height: "100px", width: "150px" };

export default Son1;
