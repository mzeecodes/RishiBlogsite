import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Rishi Shah</h1>
      <p className="home-subtext">
        A finance enthusiast, researcher, and CFA Level II candidate sharing insights on investing, markets, and strategy.
      </p>

      <div className="research-section">
        <h2>Research Papers & Reports</h2>
        <ul>
          <li><a href="#" target="_blank" rel="noopener noreferrer">2025 Equity Market Trends (PDF)</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Behavioral Finance: Investor Psychology Report (PDF)</a></li>
          <li><a href="#" target="_blank" rel="noopener noreferrer">Global Capital Flow Analysis (PDF)</a></li>
        </ul>
      </div>

      <div className="blog-section">
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
      </div>
    </div>
  );
};

export default Home;
