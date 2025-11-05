import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-text">
          <h1>About Rishi Shah</h1>
          <p>
            I’m <strong>Rishi Shah</strong>, a 21-year-old finance enthusiast currently pursuing <strong>CFA Level II</strong>.
            I’m deeply passionate about understanding global markets, portfolio management, and behavioral finance.
          </p>
          <p>
            I’m a <strong>partner in my own mutual funds capital management firm</strong> and currently
            work in the finance industry in a sales role, helping clients achieve smarter financial outcomes.
          </p>
          <p>
            My long-term ambition is to build financial products that bridge knowledge, analytics,
            and real-world investment strategy. I also love writing <strong>reports, articles, and research papers</strong> focused on the ever-evolving world of finance.
          </p>
        </div>

        <div className="about-image">
          <img src="/RishiPortrait.jpg" alt="Rishi Shah Portrait" />
        </div>
      </div>
    </div>
  );
};

export default About;
