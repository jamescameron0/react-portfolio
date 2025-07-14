import styles from "./App.module.css";
import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { ProjectDetails } from "./components/ProjectDetails/ProjectDetails";


function App() {
  return (
    <div className={styles.App}>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </>
        } />

        {/* Project Detail Page */}
        <Route path="/projects/:projectId" element={<ProjectDetails />} />
      </Routes>
    </div>
  );
}

export default App;
