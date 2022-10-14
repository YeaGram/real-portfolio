import styles from "./hamburger.module.css";
import { Squash as Hamburger } from "hamburger-react";
export default function HamburgerMenu() {
  return (
    <div className={styles.hamburger_container}>
      {/* <span
        className={`${styles.hamburger_items} bg-black dark:bg-white transition-all duration-200`}
      ></span>
      <span
        className={`${styles.hamburger_items} bg-black dark:bg-white transition-all duration-200`}
      ></span>
      <span
        className={`${styles.hamburger_items} bg-black dark:bg-white transition-all duration-200`}
      ></span> */}
      <Hamburger />
    </div>
  );
}
