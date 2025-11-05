import React from "react";
import BlogCard from "../components/BlogCard";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-page-title">Finance Insights & Analysis</h1>
      <p className="blog-page-subtext">
        Curated blogs and reports on investment, markets, and strategy.
      </p>

      <div className="blog-list">
        <BlogCard
          title="India’s Mutual Fund Revolution: 2025 Outlook"
          date="November 2025"
          description="A deep dive into how domestic investors are reshaping India’s equity landscape through SIP inflows and retail confidence."
          link="#"
        />
        <BlogCard
          title="The Rise of Passive Investing in Emerging Markets"
          date="October 2025"
          description="Why ETFs and index funds are redefining diversification for global investors."
          link="#"
        />
        <BlogCard
          title="How AI Is Changing Financial Advisory"
          date="September 2025"
          description="Exploring the integration of generative AI and predictive analytics in modern portfolio management."
          link="#"
        />
        <BlogCard
          title="Decoding Behavioral Finance"
          date="August 2025"
          description="Understanding the psychological biases driving market decisions in volatile times."
          link="#"
        />
        <BlogCard
          title="Macroeconomic Trends Shaping Global Capital Flows"
          date="July 2025"
          description="An analysis of inflation, interest rates, and capital mobility across major economies."
          link="#"
        />
      </div>
    </div>
  );
};

export default Blog;
