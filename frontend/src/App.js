import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import Lineups from "./pages/Lineups";
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
            <div className="bg-neutral-700">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/maps" element={<Maps />} />
                    <Route path="/lineups" element={<Lineups />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/new-blog" element={<NewBlog />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/blog/:id" element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
