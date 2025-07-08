import React from 'react'
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import styles from "./Experience.module.css"

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience / Education </h2>
        <div className={styles.content}>
            <ul className={styles.history}>
            {
                history.map((historyItem, id) => {
                    return (
                    <li key={id} className={styles.historyItem}>
                        <img 
                        src={historyItem.imageSrc} 
                        alt={`${historyItem.organisation} Logo`} 
                        />
                        <div className={styles.historyItemDetails}>
                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                        <ul>
                            {historyItem.experiences.map((experience, idx) => (
                            <li key={idx}>{experience}</li>
                            ))}
                        </ul>
                        </div>
                    </li>
                    );
                })
                }

            </ul>

            <div className={styles.skills}>{ 
            skills.map((skill, id) => { 
                return <div key={id} className={styles.skill}> 
                    <div className={styles.skillImageContainer}>
                        <img src={skill.imageSrc} alt={skill.title} />
                    </div>
                    <p>{skill.title}</p>
                </div>
            })
            }</div>

        </div>
    </section>
  );
}

/*,
    {
      "role": "Private swimming instructor",
      "organisation": "Swim @ your home",
      "startDate": "June, 2021",
      "endDate": "August, 2023",
      "experiences": [
        "Started a family business teaching private swimming lessons",
        "Offered lessons to 100+ families over 3 years",
        "Created forms and spreadsheet to track client info. and cashflow"
      ],
      "imageSrc": "assets/history/swim.png"
    }*/