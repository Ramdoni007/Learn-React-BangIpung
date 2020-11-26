import React from "react";
import "./CSS/blog.css";

const Blog = (props) => {
  return (
    <div className="blog-wrap">
      <img src="https://placeimg.com/640/480/tech" alt="" />
      <p>{props.Tanggal} </p>
      <h2>{props.Teknologi}</h2>
      <p>{props.Summary}</p>
    </div>
  );
};

export default Blog;
