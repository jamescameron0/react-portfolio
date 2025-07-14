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
            I'm a Computer Engineering & Management Student at McMaster University. 
            Below you'll find some of my interests, experiences, and projects. Feel free to reach out!
        </p>
        <a className={styles.contactBtn} href="mailto:camerj22@mcmaster.ca">Contact Me</a>
    </div>
    <img className = {styles.heroImg} src="assets/hero/heroImage.png" alt="image of me"></img>
    <div className={styles.topBlur}></div>
    <div className={styles.bottomBlur}></div>
  </section>
  );
};
