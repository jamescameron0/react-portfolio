import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience / Education</h2>

      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div className={styles.logoContainer}>
                <img
                  src={historyItem.imageSrc}
                  alt={`${historyItem.organisation} Logo`}
                />
              </div>

              <div className={styles.historyItemDetails}>
                <div className={styles.historyHeader}>
                  <h3>{historyItem.role}</h3>
                  <span className={styles.date}>
                    {historyItem.startDate} — {historyItem.endDate}
                  </span>
                </div>

                <h4>{historyItem.organisation}</h4>

                <ul>
                  {historyItem.experiences.map((experience, idx) => (
                    <li key={idx}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>Technical Skills</h3>

          <div className={styles.skills}>
            {skills.map((skill, id) => (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};