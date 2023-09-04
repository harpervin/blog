import React, { useEffect, useState } from "react";
import { backendHomepage } from "../api/backend";

import MapCard from "../components/MapCard.js";
import Ascent from "../assets/Ascent.png";
import Haven from "../assets/Haven.png";
import Bind from "../assets/Bind.png";
import Lotus from "../assets/Lotus.png";
import Split from "../assets/Split.png";
import Sunset from "../assets/Sunset.png";
import Fracture from "../assets/Fracture.png";
import Pearl from "../assets/Pearl.png";

export default function Maps() {
    // useEffect(() => {
    //     const getPlaybook = async () => {
    //         try {
    //             const response = await getPlaybook();
    //         } catch (err) {
    //             console.log("Error fetching data from react: ", err);
    //         }
    //     };
    //     getUser();
    // }, []);

    return (
        <>
            <div className="flex mx-8 pt-6 text-black text-2xl font-bold">
                E7:A1 Map Rotation
            </div>
            <div className="flex">
                <MapCard name="Ascent" image={Ascent} />
                <MapCard name="Haven" image={Haven} />
                <MapCard name="Bind" image={Bind} />
            </div>
            <div className="flex">
                <MapCard name="Split" image={Split} />
                <MapCard name="Lotus" image={Lotus} />
                <MapCard name="Sunset" image={Sunset} />
            </div>
            <div className="flex mx-8 mt-6 text-black text-2xl font-bold">
                Out of rotation
            </div>
            <div className="flex">
                <MapCard name="Fracture" image={Fracture} />
                <MapCard name="Pearl" image={Pearl} />
            </div>
        </>
    );
}
