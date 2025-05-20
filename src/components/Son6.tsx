import styles from "../less/Son6.module.less";

function Son6() {
  return (
    <div className={styles.Son6Box}>
      <div>我是子组件</div>
      <div className={styles.nums}>1234</div>
    </div>
  );
}

export default Son6;
