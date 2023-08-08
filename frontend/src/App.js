import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewBlog from "./pages/NewBlog";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";
import Blog from "./pages/Blog/[id]";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/new-blog" element={<NewBlog />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings" element={<BlogCard />} />
        <Route path="/blog/:id" element={<Blog />} />

      </Routes>
    </Router>
  );
}

export default App;
