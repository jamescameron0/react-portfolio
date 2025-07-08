import React from 'react';
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
  <section className={styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>
            Hello, I'm James
        </h1>
        <p className={styles.description}>
            I am a Computer Engineering and Management Student at McMaster University. Please reach out to me to learn more!
        </p>
        <a className={styles.contactBtn} href="mailto:camerj22@mcmaster.ca">Contact Me</a>
    </div>
    <img className = {styles.heroImg} src="assets/hero/heroImage.png" alt="image of me"></img>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );
};
