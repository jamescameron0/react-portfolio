import React from 'react'

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>
        <div className={styles.content}>
            <img className={styles.aboutImage} src="/assets/about/aboutImage.png" alt="picture of me"></img>
            <ul className = {styles.aboutItems}>
                <li className = {styles.aboutItem}>
                    <img src="assets/about/cursorIcon.png" alt="Cursor Icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I'm a dev with experiecne in building websites</p>
                    </div>
                </li >
                <li className = {styles.aboutItem}>
                    <img src="assets/about/serverIcon.png" alt="Server Icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>I'm a dev with experiecne in building backend systems</p>
                    </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img src="assets/about/uiIcon.png" alt="UI Icon"></img>
                    <div className={styles.aboutItemText}>
                        <h3>UI designer</h3>
                        <p>I'm a dev with experiecne in building backend systems</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
