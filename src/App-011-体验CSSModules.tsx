import Son6 from "./components/Son6";
import styles from "./less/App.module.less";

function App() {
  console.log("父styles", styles);
  return (
    <div className={styles.AppBox}>
      <div className={styles.AppBoxTitle}>我是父组件</div>

      <Son6 />
    </div>
  );
}

export default App;
