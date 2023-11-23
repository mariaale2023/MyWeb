import React from "react";
import { skills } from "../constants";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'am{" "}
        {/* <h2 class="text-8xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r  from-purple-400 to-pink-600">
        Tailwind CSS
      </h2> */}
        <span className="blue-gradient_text font-semibold drop-shadow">
          MARIA
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          As a passionate Front-end Developer originally from Chile and
          currently based in the beautiful landscapes of New Zealand, I bring
          over 8 years of expertise in business and project management to the
          world of web development.
        </p>
        <br />
        <p>
          My journey in the tech industry has equipped me with the skills to
          assist businesses in initiating and expanding their digital presence.
          I thrive on turning ideas into captivating and functional products
          that leave a lasting impact.
        </p>
        <br />
        <p>
          Beyond coding, I enjoy exploring the latest trends in design and
          technology, always eager to learn and implement innovative solutions.
          Let's collaborate and bring your projects to life!
        </p>
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
        <h3>Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            As a passionate Front-end Developer originally from Chile and
            currently based in the beautiful landscapes of New Zealand, I bring
            over 8 years of expertise in business and project management to the
            world of web development.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
