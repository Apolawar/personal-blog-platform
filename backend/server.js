let posts = []; // Array to hold blog posts in memory

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

const cors = require("cors");
app.use(cors());

//Get
app.get("/api/posts", (req, res) => {
  res.json(posts);
});


//Post
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ error: "Title and content are required" });
  }

  const newPost = {
    id: posts.length + 1, // Generate a simple ID
    title,
    content,
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

//Get
app.get("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res.status(404).json({ error: "Post not found" });
  }

  res.json(post);
});
