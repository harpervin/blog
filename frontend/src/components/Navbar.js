import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { SiValorant } from "react-icons/si";
import { TbBow, TbMap2 } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";

export default function Navbar() {
    const [user, setUser] = useState("");
    const [session, setSession] = useState(Boolean);
    const [menu, setMenu] = useState(false);
    const dropdownRef = useRef(null);


    const dropdown = () => {
        setMenu(!menu)
    }

    useEffect(() => {
        // Add event listener to the document to close the menu when clicking outside
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setMenu(false);
          }
        }
    
        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
    
        // Clean up the event listener when the component unmounts
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

    useEffect(() => {
        const access_token = Cookies.get("access_token");
        if (access_token) {
            setSession(true);

            const username = Cookies.get("username");
            setUser(username);
        } else {
            setSession(false);
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
                        { session && 
                        
                        <AiOutlineUser
                            size={30}
                            className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                            onClick={dropdown}
                        />
                        }
                        { menu && 
                        <div class="relative inline-block text-left">
                            <div class="absolute right-0 z-10 mt-6 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <Link to="/" onClick={dropdown}>
                                    <div class="py-1" role="none">
                                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">My Account</a>
                                    </div>
                                </Link>
                                <Link to="/settings" onClick={dropdown}>
                                    <div class="py-1" role="none">
                                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">Settings</a>
                                    </div>
                                </Link>
                                <Link to="/logout" onClick={dropdown}>
                                    <div class="py-1" role="none">
                                        <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-4">Logout</a>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        }
                        
                        { !session && 
                        <Link to="/login" className="mr-6">
                            <AiOutlineUser
                                size={30}
                                className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                            />
                        </Link>
                        }
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
