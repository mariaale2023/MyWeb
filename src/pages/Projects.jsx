import React from "react";
import mariaImage from "../assets/projects/maria_photo2.png";

import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <div className="grid-container1">
        <div className="text-container">
          <h1 className="head-text">
            My{" "}
            <span className="blue-gradient_text font-semibold drop-shadow">
              PROJECTS
            </span>
          </h1>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              Welcome to the Project Page, a showcase of my coding
              craftsmanship. Here, you'll find a medley of projects, each
              telling a story of challenges conquered and creativity unleashed.
              Whether it's web development, full-stack applications, or unique
              coding experiments, join me on this journey as we unravel the
              world of possibilities in each project.
            </p>
          </div>
          <div className="flex flex-wrap my-20 gap-16">
            {projects.map((project) => (
              <div className="lg:w-[400px] w-full" key={project.name}>
                <div className={`block-container w-12 h-12`}>
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col">
                  <h2 className="text-2xl font-poppins font-semibold">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-slate-500 ">{project.description}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-500"
                    >
                      Live Link
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default Projects;

// //-----

// import React, { useState } from "react";
// import { useSpring, animated } from "react-spring";
// import { projects }  from "../constants"; // Import the projects array from index.jsx

// const ProjectGallery = () => {
//   const [selectedProject, setSelectedProject] = useState(null);

//   const projectSpring = useSpring({
//     opacity: selectedProject ? 1 : 0,
//     transform: `scale(${selectedProject ? 1 : 0.8})`,
//   });

//   return (
//     <div>
//       <h2 className="subhead-text">Projects</h2>
//       <div className="mt-16 flex flex-wrap gap-12">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="block-container w-20 h-20"
//             onClick={() => setSelectedProject(project)}
//           >
//             <div className="btn-back rounded-xl" />
//             <div className=" btn-front rounded-xl flex justify-center items-center">
//               <img
//                 src={project.iconUrl} {/* Assuming iconUrl is the project image URL */}
//                 alt={project.name}
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedProject && (
//         <animated.div style={projectSpring} className="project-info">
//           <h3>{selectedProject.name}</h3>
//           <p>{selectedProject.description}</p>
//           <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
//             View Project
//           </a>
//           <button onClick={() => setSelectedProject(null)}>Close</button>
//         </animated.div>
//       )}
//     </div>
//   );
// };

// export default About;
