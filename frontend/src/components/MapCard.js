import React from "react";
import { Link } from "react-router-dom"; // Make sure to import the Link component if you're using React Router

export default function MapCard({ name, image }) {
    return (
        <>
            <Link to={`/${name}`} className="w-1/3 m-8 flex">
                <div className="w-full relative">
                    {/* <div className='font-bold text-3xl text-black'>{ name }</div> */}
                    <img
                        className="outline rounded-2xl outline-gray-200 brightness-50"
                        src={image}
                        alt={name}
                    />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-white text-6xl font-bold">
                        {name}
                    </div>
                </div>
            </Link>
        </>
    );
}
