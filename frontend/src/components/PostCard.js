import React from "react";

const PostCard = ({ post }) => (
  <div className="card">
    <h3>{post.title}</h3>
    <p>{post.content}</p>
  </div>
);

export default PostCard;
