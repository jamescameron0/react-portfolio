import { useEffect } from "react";
import { useParams } from "react-router-dom";
import projectData from "../../data/projects.json";
import { SimpleNavbar } from "../Navbar/SimpleNavbar";
import styles from "./ProjectDetails.module.css";

export const ProjectDetails = () => {
  const { projectId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);
  const project = projectData.find((p) => p.id === projectId);

  return (
    <div className={styles.wrapper}>
      <SimpleNavbar />
      <div className={styles.container}>
        <h1 className={styles.title}>{project.title}</h1>
        <div className={styles.imageGallery}>
          {project.images.map((img, i) => (
            <img key={i} src={img} alt="" className={styles.projectImage} />
          ))}
        </div>
        <p className={styles.summary}>{project.summary}</p>
        <div className={styles.skills}>
          <h2 className={styles.skillsTitle}>Skills</h2>
          {project.skills.map((skill, i) => (
            <div key={i} className={styles.skill}>
              <h3>{skill.title}</h3>
              <p>{skill.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
