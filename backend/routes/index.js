const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home Page");
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

module.exports = router;
