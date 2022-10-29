import React from "react";
import Project from "./Project";


function Projects() {
    return(
        <section className="projects-section">
            <h2>Projects</h2>
            <div className="Projects">
                <Project projectTitle = "Plagiarism Checher" projectField = "AI"/>
                <Project projectTitle = "Face Mask Detection" projectField = "AI"/>
            </div>
            <div className="Projects">
                <Project projectTitle = "Library Management System"
                 projectField = "Automation"/>
                <Project projectTitle = "Color Detection" projectField ="Data Analysis"/>
            </div>

        </section>
    );
}


export default Projects;