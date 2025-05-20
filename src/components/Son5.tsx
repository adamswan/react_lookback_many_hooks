import { memo } from "react";

interface Props {
  getName: () => string;
}

function Son1(props: Props) {
  console.log("子组件渲染了");

  const getName = props.getName;

  return (
    <div style={theStyles}>
      <div>我是子组件</div>
      <div>父传来的数据:{getName()}</div>
    </div>
  );
}

const theStyles = { backgroundColor: "#add8e6", width: "300px", height: "200px" };

// 导出时，用 memo() 包裹子组件
export default memo(Son1);
