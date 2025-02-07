import React from "react";

import "./style.scss";

import HeroBanner from "../home/heroBanner/HeroBanner";  // Corrected path
import Explore from "../explore/Explore";     // Corrected path
import VideoSearch from "./VideoSearch";

const Videosection = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <VideoSearch />
        
     
        </div>
    );
};

export default Videosection;
