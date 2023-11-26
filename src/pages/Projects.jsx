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
            <span className="pink-gradient_text font-semibold drop-shadow">
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
                {/* <div className={`block-container w-12 h-12 box-icon-project`}>
                  <div className={`btn-back rounded-xl ${project.theme}`} />
                  <div className="btn-front rounded-xl flex justify-center items-center">
                    <img
                      src={project.iconUrl}
                      alt={project.name}
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                </div> */}

                <div>
                  <img
                    src={project.imgURL}
                    alt={project.name}
                    className="w-full h-64 object-cover rounded-t-xl image-zoom image-fade-in"
                  />
                </div>

                <div className="mt-5 flex flex-col box-text-project">
                  <h2 className="text-2xl font-poppins font-semibold">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-slate-500 ">{project.description}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-fuchsia-500"
                    >
                      Live Link
                    </Link>
                    {/* <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain "
                    /> */}
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
