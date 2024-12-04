import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav>
    <h2>Personal Blog</h2>
    <div>
      <Link to="/">Home</Link>
      <Link to="/create">Create Post</Link>
    </div>
  </nav>
);

export default Navbar;
