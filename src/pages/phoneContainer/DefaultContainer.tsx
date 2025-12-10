import styles from "./../../css/module/PhoneContainer.module.css";

export default function DefaultContainer({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.phoneContainer}>{children}</div>
    </div>
  );
}
