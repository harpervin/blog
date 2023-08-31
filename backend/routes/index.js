import { fetchLatestBlogs, fetchBlog, supabase } from "../db/db.js";

import express from "express";
const router = express.Router();

router.get("/latestBlogs", async (req, res) => {
    //res.send("latest blogs");
    const blogs = await fetchLatestBlogs();
    console.log("Fetched latest blogs from express server: ", blogs);
    res.send(blogs);
});

router.get("/getBlog/:id", async (req, res) => {
    //res.send("latest blogs");
    const id = req.params.id;
    const blog = await fetchBlog(id);
    res.send(blog);
});

router.post("/login", async (req, res) => {
    console.log(req.body);
    const { email, pw } = req.body;
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: pw,
    });
    console.log(data);
    res.send(data);
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

export default router;
