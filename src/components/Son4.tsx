import { memo } from "react";

interface Props {
  ids: number[];
}

function Son1(props: Props) {
  console.log("子组件渲染了");

  const ids = props.ids;

  return (
    <div style={theStyles}>
      <div>我是子组件</div>
      <div>父传来的数据:{JSON.stringify(ids)}</div>
    </div>
  );
}

const theStyles = { backgroundColor: "#add8e6", width: "300px", height: "200px" };

// 导出时，用 memo() 包裹子组件
export default memo(Son1);
