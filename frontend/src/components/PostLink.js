import React from "react";
import { Link } from "gatsby";

const PostLink = ({ post }) => (
  <div className="neu-border-button rounded-lg p-6 my-6">
    <div
      className="w-full h-48 rounded-lg mb-4"
      style={{
        backgroundImage: `url(../${post.frontmatter.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
    <Link to={post.frontmatter.path}>
      <h1 className="font-bold text-2xl">{post.frontmatter.title}</h1>
    </Link>
    <div className="text-xs my-2">{post.frontmatter.date}</div>
    <div className="italic">{post.excerpt}</div>
  </div>
);
export default PostLink;
