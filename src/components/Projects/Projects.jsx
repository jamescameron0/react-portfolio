import React from 'react'
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";

import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const [featured, ...rest] = projects;
    return (
        <section className={styles.container} id="projects">
          <h2 className={styles.title}>Projects</h2>
          <div className={styles.projects}>
            <ProjectCard project={featured} featured />
            <div className={styles.grid}>
              {rest.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      );
}
