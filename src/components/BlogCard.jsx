import React from "react";
import "./BlogCard.css";

const BlogCard = ({ title, date, description, link }) => {
  return (
    <div className="blog-card">
      <div className="blog-content">
        <h2 className="blog-title">{title}</h2>
        <p className="blog-date">{date}</p>
        <p className="blog-desc">{description}</p>
        <a href={link} className="blog-readmore">
          Read More →
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
