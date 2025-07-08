import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <h2 className={styles.title}>Contact</h2>
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
          <a href="https://www.linkedin.com/in/james-cameron-jc0123/">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://github.com/jamescameron0">github</a>
        </li>
      </ul>
    </footer>
  );
};