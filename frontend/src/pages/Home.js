import React, { useEffect, useState } from "react";
import { home } from "../api/backend";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import wallpaper from "../assets/home-wallpaper.png"

export default function Home() {
    const [user, setUser] = useState("");
    const [session, setSession] = useState(Boolean);
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    useEffect(() => {
        const username = Cookies.get("at");
        if (username) {
            setSession(true);

            const username = Cookies.get("username");
            setUser(username);
        } else {
            setSession(false);
        }
    }, []);

    //fetchHomepageBlogs();
    // const [latestBlogs, setLatestBlogs] = useState([]);

    return (
        <>
            {!session && (
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

            {session && (
                <div className="flex items-center justify-center h-screen text-black text-6xl font-bold">
                    Welcome Back, {user}
                </div>
            )}
        </>
    );
}
