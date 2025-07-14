import React from "react";

import styles from "./ProjectCard.module.css";

import { Link } from "react-router-dom";


export const ProjectCard = ({
  project: { id, title, imageSrc, description, skills },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.skillsBox}>
        <ul className={styles.skills}>
          {skills.map((skill, i) => (
            <li key={i} className={styles.skill}>
              {skill.title}
            </li>
            ))}
        </ul>
      </div>
      <div className={styles.links}>
      <Link to={`/projects/${id}`} className={styles.link}>
        More Info
      </Link>
      </div>
    </div>
  );
};