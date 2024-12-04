import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) {
      alert("Both fields are required.");
      return;
    }

    axios
      .post("http://localhost:5000/api/posts", { title, content })
      .then(() => {
        alert("Post created successfully!");
        setTitle("");
        setContent("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container">
      <h1>Create a New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows="8"
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        ></textarea>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
