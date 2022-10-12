import styles from "./hamburger.module.css";
export default function HamburgerMenu() {
  return (
    <div className={styles.hamburger_container}>
      <span className={styles.hamburger_items}></span>
      <span className={styles.hamburger_items}></span>
      <span className={styles.hamburger_items}></span>
    </div>
  );
}
