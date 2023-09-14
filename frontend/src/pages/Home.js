// React
import React, { useEffect, useState } from "react";

// React router
import { Navigate, useNavigate } from "react-router-dom";

// React Redux
// import { useSelector } from "react-redux";
// import { selectIsAuthenticated } from "../util/selectors/auth";

// Cookie handling
import Cookies from "js-cookie";

// Backend functions
import { home } from "../api/backend";

// Assets
import wallpaper from "../assets/home-wallpaper.png";

export default function Home() {
    const [user, setUser] = useState("");
    const navigate = useNavigate();

    // const isAuthenticated = useSelector(selectIsAuthenticated);

    const username = Cookies.get("username");

    const handleLogin = () => {
        navigate("/login");
    };

    useEffect(() => {
        if (username) {
            setUser(username);
        }
    }, []);

    //fetchHomepageBlogs();
    // const [latestBlogs, setLatestBlogs] = useState([]);

    return (
        <>
            {!username && (
                <div className="flex flex-row items-center w-full">
                    <div className="flex flex-col justify-center h-screen w-1/2 mx-28">
                        <div className="text-purple-500 text-4xl font-bold">
                            ValoScrolls
                        </div>
                        <div className="text-black text-4xl font-bold">
                            A playbook made for your next VCT ready team.
                        </div>
                        <div>
                            <button
                                onClick={handleLogin}
                                className="hover:bg-purple-400 text-sm text-white font-bold bg-purple-500 rounded-sm h-8 w-18 px-2 my-8"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center h-screen bg-gray-200 w-1/2 px-24">
                        {/* <img classname="transform scale-200" src={wallpaper} alt=""></img> */}
                        {/* <div className="text-purple-500 text-4xl font-bold">test</div>
                        <div className="text-black text-4xl font-bold">
                            A test made for your next VCT ready team.
                        </div> */}
                    </div>
                </div>
            )}

            {username && (
                    <div className="flex flex-row items-center w-full">
                        <div className="flex flex-col justify-center h-screen w-1/2 mx-28">
                            <div className="flex items-center text-black text-4xl">
                                Welcome Back,&nbsp;
                                <span className="text-purple-500 font-bold inline">
                                     {user}
                                </span>
                            </div>
                            <div>
                                <button
                                    onClick={handleLogin}
                                    className="hover:bg-purple-400 text-sm text-white font-bold bg-purple-500 rounded-sm h-8 w-18 px-2 my-4"
                                >
                                    Create a strategy
                                </button>
                                <button
                                    onClick={handleLogin}
                                    className="hover:bg-purple-400 text-sm text-white font-bold bg-purple-500 rounded-sm h-8 w-18 px-2 ml-4"
                                >
                                    Learn a lineup
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center h-screen bg-gray-200 w-1/2 px-24">
                            {/* <img classname="transform scale-200" src={wallpaper} alt=""></img> */}
                            {/* <div className="text-purple-500 text-4xl font-bold">test</div>
                        <div className="text-black text-4xl font-bold">
                            A test made for your next VCT ready team.
                        </div> */}
                        </div>
                    </div>
            )}
        </>
    );
}
