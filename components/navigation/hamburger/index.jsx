import styles from "./hamburger.module.css";
export default function HamburgerMenu() {
  return (
    <div className={styles.hamburger_container}>
      <span
        className={`${styles.hamburger_items} bg-black dark:bg-white transition-all duration-200`}
      ></span>
      <span
        className={`${styles.hamburger_items} bg-black dark:bg-white transition-all duration-200`}
      ></span>
      <span
        className={`${styles.hamburger_items} bg-black dark:bg-white transition-all duration-200`}
      ></span>
    </div>
  );
}
