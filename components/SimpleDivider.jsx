import Image from "next/image";
import styles from "../styles/simple_divider.module.css";

export default function SimpleDivider() {
  return (
    <div className={styles.container}>
      <Image className={styles.background} src="/simple_background.jpg" alt="Divider" fill sizes="100vw"></Image>
      <h1 className={styles.title}>The mattress loved by millions is back.</h1>
    </div>
  );
}
