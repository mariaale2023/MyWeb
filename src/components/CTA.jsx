import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <div>
        <p className="cta-text">Have a project in mind?</p>{" "}
        <p className="text-gray-500  font-semibold flex-1 text-xl max-md:text-center ">
          Let's bring your ideas to life together! Whether it's a website,
          application, or any digital solution, I'm here to help you turn your
          vision into reality.
        </p>
      </div>

      <Link to="/contact" className="btn">
        Let's Get Started
      </Link>
    </section>
  );
};

export default CTA;
