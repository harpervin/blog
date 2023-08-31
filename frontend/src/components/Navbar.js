import React from "react";
import { AiFillHome, AiOutlineUser } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { SiValorant } from "react-icons/si";
import { TbBow, TbMap2 } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Navbar() {
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
                    <div className="flex items-center px-6">
                        <Link to="/login" className="mr-6">
                            <AiOutlineUser
                                size={30}
                                className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                            />
                        </Link>
                        <Link to="/settings">
                            <FiSettings
                                size={30}
                                className="text-2xl text-black transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:text-indigo-500 duration-100"
                            />
                        </Link>
                    </div>
                </div>
                <hr className=""></hr>
            </div>
        </div>
    );
}
