import React from "react";

import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-pink  py-4 px-8 text-pink-900 mx-5">
      Hi, I am <span className="font-semibold">Maria</span>
      <br />
      The aspiring Developer
    </h1>
  ),
  2: (
    <div>
      <InfoBox
        text="Worked in IT Sales and project for over 8 years in my country. Also entrepreneur, Chef and Yoga teacher"
        link="/about"
        btnText="Learn more about me"
      />
    </div>
  ),
  3: (
    <InfoBox
      text="I have been exploring new tools while working on various projects, and I’m starting to think that I might have a tool addiction"
      link="/projects"
      btnText="Visit my Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
  5: <h1>5</h1>,
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
