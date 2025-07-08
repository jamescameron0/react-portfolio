import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const SimpleNavbar = () => {
  return (
    <nav className={styles.navbarSimple}>
      <Link className={styles.title} to="/">
        ← Back 
      </Link>
    </nav>
  );
};

