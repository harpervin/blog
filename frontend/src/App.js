import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Maps from "./pages/Maps";
import Lineups from "./pages/Lineups";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NewBlog from "./pages/NewBlog";
import Settings from "./pages/Settings";
import Myprofile from "./pages/Myprofile";
import Blog from "./pages/Blog/[id]";

import Navbar from "./components/Navbar";
import BlogCard from "./components/BlogCard";

import Ascent from "./pages/maps/Ascent";
import Bind from "./pages/maps/Bind";
import Haven from "./pages/maps/Haven";
import Split from "./pages/maps/Split";
import Lotus from "./pages/maps/Lotus";
import Sunset from "./pages/maps/Sunset";
import Fracture from "./pages/maps/Fracture";
import Pearl from "./pages/maps/Pearl";

function App() {
    return (
        <Router>
            <div className="bg-light">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/maps" element={<Maps />} />
                    <Route path="/lineups" element={<Lineups />} />

                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* new routes to implement */}
                    <Route path="/logout" element={<Home />} />
                    <Route path="/myprofile" element={<Myprofile />} />

                    <Route path="/new-blog" element={<NewBlog />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="/blog/:id" element={<Blog />} />

                    <Route path="/ascent" element={<Ascent />} />
                    <Route path="/split" element={<Split />} />
                    <Route path="/bind" element={<Bind />} />
                    <Route path="/haven" element={<Haven />} />
                    <Route path="/lotus" element={<Lotus />} />
                    <Route path="/sunset" element={<Sunset />} />

                    <Route path="/fracture" element={<Fracture />} />
                    <Route path="/pearl" element={<Pearl />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
