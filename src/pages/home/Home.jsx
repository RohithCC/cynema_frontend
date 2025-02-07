import React from "react";

import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Trending from "./trending/Trending";
import Popular from "./popular/Popular";
import Popular1 from "./popular/Popular1";
import TopRated from "./topRated/TopRated";
import VideosSection from "../details/videosSection/VideosSection";
import Similar from "../details/carousels/Similar";
import Recommendation from "../details/carousels/Recommendation";
import CopilotFeature from '.././privacy/CopilotFeature';
import Hero from "../privacy/Hero";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Hero /> 
            <Popular1 />
            <Popular />

            {/*     <CopilotFeature />  */}
          
        
            
           
        </div>
    );
};

export default Home;
