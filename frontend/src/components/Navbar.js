// React
import React from "react";
import { useState, useEffect, useRef } from "react";

// React Redux
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuthenticated } from "../util/selectors/auth";
import { reduxLogin, reduxLogout } from "../util/actions/auth";

// Cookie handling
import Cookies from "js-cookie";

// Backend functions
import { getNewTokens } from "../api/backend";
import { setAccessToken, setRefreshToken } from "../util/setCookies";

// React Icons
import { AiOutlineUser } from "react-icons/ai";
import { SiValorant } from "react-icons/si";
import { TbBow, TbMap2 } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [user, setUser] = useState("");
    const [menu, setMenu] = useState(false);
    const dropdownRef = useRef(null);

    const isAuthenticated = useSelector(selectIsAuthenticated);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    console.log("authenticated; ", isAuthenticated);

    const handleLogout = () => {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        Cookies.remove("username");
        dispatch(reduxLogout());
        setMenu(false);
        navigate("/");
    };

    const dropdown = () => {
        setMenu(!menu);
    };

    const handleLogin = () => {
        navigate("/login");
    };

    useEffect(() => {
        // Add event listener to the document to close the menu when clicking outside
        function handleClickOutside(event) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setMenu(false);
            }
        }

        // Attach the event listener when the component mounts
        document.addEventListener("mousedown", handleClickOutside);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const access_token = Cookies.get("access_token");
    const refresh_token = Cookies.get("refresh_token");
    const username = Cookies.get("username");

    const checkTokens = async () => {
        const response = await getNewTokens(refresh_token);
        const newAccessToken = response.accessToken;
        const newRefreshToken = response.refreshToken;
        setAccessToken(newAccessToken);
        setRefreshToken(newRefreshToken);
        dispatch(reduxLogin(username));
    };

    useEffect(() => {
        if (access_token && refresh_token && username) {
            const username = Cookies.get("username");
            dispatch(reduxLogin(username));
            setUser(username);
        } else if (!access_token && refresh_token) {
            checkTokens();
        } else {
            dispatch(reduxLogout());
        }
    }, []);

    return (
        <div className="flex justify-center">
            <div className="w-11/12">
                <div className="h-16 bg-light flex items-center justify-between">
                    <div className="flex items-center px-6">
                        <Link to="/">
                            <SiValorant
                                size={25}
                                className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                            />
                        </Link>
                        <Link to="/maps" className="ml-8">
                            <TbMap2
                                size={28}
                                className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                            />
                        </Link>
                        <Link to="/lineups" className="ml-8">
                            <TbBow
                                size={28}
                                className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                            />
                        </Link>
                    </div>
                    <div className="flex items-center px-6" ref={dropdownRef}>
                        {isAuthenticated && (
                            <AiOutlineUser
                                size={30}
                                className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                                onClick={dropdown}
                            />
                        )}
                        {menu && (
                            <div class="relative inline-block text-left">
                                <div
                                    class="absolute right-0 z-10 mt-8 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="menu-button"
                                    tabindex="-1"
                                >
                                    <div class="" role="none">
                                        <Link
                                            to="/myprofile"
                                            onClick={dropdown}
                                        >
                                            <a
                                                class="text-gray-700 block px-4 py-2 text-sm hover:text-purple-500 hover:bg-gray-100"
                                                role="menuitem"
                                                tabindex="-1"
                                                id="menu-item-0"
                                            >
                                                My Account
                                            </a>
                                        </Link>
                                    </div>

                                    <div class="">
                                        <Link to="/settings" onClick={dropdown}>
                                            <a
                                                class="text-gray-700 block px-4 py-2 text-sm hover:text-purple-500 hover:bg-gray-100"
                                                role="menuitem"
                                                tabindex="-1"
                                                id="menu-item-2"
                                            >
                                                Settings
                                            </a>
                                        </Link>
                                    </div>
                                    <div class="">
                                        <Link to="/" onClick={handleLogout}>
                                            <a
                                                class="text-gray-700 block px-4 py-2 text-sm hover:text-purple-500 hover:bg-gray-100"
                                                role="menuitem"
                                                tabindex="-1"
                                                id="menu-item-4"
                                            >
                                                Logout
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                        {!isAuthenticated && (
                            <button
                                onClick={handleLogin}
                                className="hover:bg-purple-400 text-sm text-white font-bold bg-purple-500 rounded-sm h-8 w-18 px-2 my-8"
                            >
                                Login
                            </button>
                        )}
                        {/* <Link to="/settings">
                            <FiSettings
                                size={30}
                                className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                            />
                        </Link> */}
                    </div>
                </div>
                <hr className=""></hr>
            </div>
        </div>
    );
}
