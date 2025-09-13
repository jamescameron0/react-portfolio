import React from 'react'

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>
            About
        </h2>

        <div className={styles.content}>
            <img className={styles.aboutImage} src="assets/about/aboutImage2.png" alt="picture of me"></img>
            <ul className = {styles.aboutItems}>
                <li className = {styles.aboutItem}>
                    <img className={styles.tree} src="assets/about/tree.png" alt="outdoor image"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Spending time Outside</h3>
                        <p>I love being outside, whether it's going for a bike ride, a swim, or a round of golf with my friends!</p>
                    </div>
                </li >
                <li className = {styles.aboutItem}>
                    <img className={styles.soccer} src="assets/about/arsenal.png" alt="soccer image"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Sports</h3>
                        <p> I love playing and watching soccer, where Arsenal is my favorite team. Lately, I've also been enjoying tennis and pickleball. </p>
                    </div>
                </li>
                <li className = {styles.aboutItem}>
                    <img className={styles.lightbulb} src="assets/about/lightbulb.png" alt="lightbulb image"></img>
                    <div className={styles.aboutItemText}>
                        <h3>Always Learning</h3>
                        <p>I'm always looking for something new to learn, whether it's a technical skill or just random trivia. I'm also a big Jeopardy fan!</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  );
};
