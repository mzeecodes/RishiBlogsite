import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="home-title">RISHI SHAH</h1>

      {/* Faster typewriter & no looping */}
      <motion.p
        className="home-subtext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Typewriter
          words={[
            "A finance enthusiast, researcher, and CFA Level II candidate sharing insights on investing, markets, and strategy.",
          ]}
          loop={1}           // type only once
          cursor
          cursorStyle="|"
          typeSpeed={45}     // faster typing
          deleteSpeed={0}    // no backspacing
          delaySpeed={999999} // prevents retyping
        />
      </motion.p>

      {/* Research Section */}
      <motion.div
        className="research-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2>Research Papers & Reports</h2>
        <ul>
          <li><a href="#" target="_blank" rel="noopener noreferrer">2025 Equity Market Trends (PDF)</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Behavioral Finance: Investor Psychology Report (PDF)</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Global Capital Flow Analysis (PDF)</a></li>
        </ul>
      </motion.div>

      {/* Blog Section */}
      <motion.div
        className="blog-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <h2>Recent Blogs</h2>
        <BlogCard
          title="Why Interest Rates Drive Market Cycles"
          date="October 2025"
          description="Understanding the influence of central banks and rate hikes on equity and bond valuations."
          link="#"
        />
        <BlogCard
          title="Behavioral Biases in Retail Investing"
          date="September 2025"
          description="A breakdown of the most common investor biases and how to avoid them."
          link="#"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
