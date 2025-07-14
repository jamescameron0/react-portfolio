import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:myemail@email.com">Email</a>
        </li>
        <li className={styles.link}>
          <img className={styles.phone} src="assets/contact/phone.png" alt="Phone icon" />
          <a href="tel:6136171654">Phone</a>
        </li>
        <li className={styles.link}>
          <img
            src="assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/james-cameron-jc0123/">linkedin.com</a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/jamescameron0">github.com</a>
        </li>
      </ul>
    </footer>
  );
};