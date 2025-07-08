import React from "react";

import styles from "./ProjectCard.module.css";

import { Link } from "react-router-dom";


export const ProjectCard = ({
  project: { id, title, imageSrc, description, skills },
  featured = false,
}) => {
  return (
    <div className={`${styles.container} ${featured ? styles.featured : ""}`}>
      <img
        src={imageSrc}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, i) => (
            <li key={i} className={styles.skill}>
              {skill.title}
            </li>
          ))}
        </ul>
        <Link to={`/projects/${id}`} className={styles.link}>
          More Info
        </Link>
      </div>
    </div>
  );
};