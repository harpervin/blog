import { fetchLatestBlogs, fetchBlog } from '../db/db.js'

import express from 'express';
const router = express.Router();

router.get("/latestBlogs", async (req, res) => {
  //res.send("latest blogs");
  const blogs = await fetchLatestBlogs();
  console.log("Fetched latest blogs from express server: ", blogs);
  res.send(blogs)
});

router.get("/getBlog/:id", async (req, res) => {
  //res.send("latest blogs");
  const id = req.params.id;
  const blog = await fetchBlog(id);
  res.send(blog)
});

router.get("/login", (req, res) => {
  res.send("Login Page");
});

router.get("/register", (req, res) => {
  res.send("Register Page");
});

router.get("/featured", (req, res) => {
  res.send("Featured Blogs Page. View all featured blogs here!");
});

router.get("/drafts", (req, res) => {
    res.send("Drafts Blogs Page");
  });

export default router
