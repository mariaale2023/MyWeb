import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React from "react";
import { skills } from "../constants";
import { experiences } from "../constants";
import mariaImage from "../assets/projects/maria_photo2.png";
import "./About.css"; // Import the CSS file
// import { Backdrop } from "@react-three/drei";
import CTA from "../components/CTA";

const ExperienceTimeline = () => {
  return (
    <VerticalTimeline>
      {experiences.reverse().map((experience, index) => (
        <VerticalTimelineElement
          key={experience.id}
          className="vertical-timeline-element"
          date={experience.date}
          contentStyle={{
            borderBottom: "8px",
            borderStyle: "solid",
            borderBottomColor: experience.iconBg,
            boxShadow: "none",
          }}
          iconStyle={{ background: experience.iconBg }}
          icon={
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          }
        >
          <div>
            <h3 className="text-black text-xl font-poppins">
              {experience.title}
            </h3>
            <p
              className="text-black-500 font-medium font-base "
              style={{ margin: 0 }}
            >
              {experience.company_name}
            </p>
          </div>
          <ul className="my-5 list-disc ml-5 space-y-2">
            {experience.points.map((point, pointIndex) => (
              <li
                className="text-black-500/50 font-normal pl-1 text-sm"
                key={`experience-point-${pointIndex}`}
              >
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

const About = () => {
  return (
    <section className="max-container">
      <div className="grid-container1">
        <div className="text-container">
          <h1 className="head-text">
            Hello, I am{" "}
            <span className="pink-gradient_text font-semibold drop-shadow">
              MARIA
            </span>
          </h1>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              As a passionate Software Developer originally from Chile and
              currently based in the beautiful landscapes of New Zealand, I
              bring over 8 years of expertise in business and project management
              to the world of web development.
            </p>
            <br />
            <p>
              My journey in the tech industry has equipped me with the skills to
              assist businesses in initiating and expanding their digital
              presence and to lead tech projects from the beginning to the end.
              I thrive on turning ideas into captivating and functional products
              that leave a lasting impact.
            </p>
            <br />
            <p>
              Beyond coding, I enjoy exploring the latest trends in design and
              technology and cloud services, always eager to learn and implement
              innovative solutions. Let's collaborate and bring your projects to
              life!
            </p>
          </div>
          <div className="photo-container p-6 flex justify-center">
            <img src={mariaImage} alt="Maria's Photo" />
          </div>
        </div>
      </div>

      <div className=" my-skills py-10 flex flex-col">
        <h2 className="subhead-text">My Skills</h2>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className=" btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain "
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="work-experience py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked in different projects, leveling up my skills and teaming
            up with smart people.
          </p>
          <div className="mt-12 flex">
            <ExperienceTimeline />
          </div>
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default About;
