import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        if (data?.results?.length) {
            const bg =
                url.backdrop +
                data.results[Math.floor(Math.random() * data.results.length)].backdrop_path;
            setBackground(bg);
        }
    }, [data, url]);

    const searchQueryHandler = (event) => {
        if ((event.key === "Enter" || event.type === "click") && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
            {!loading && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>
            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome to Linzz</span>
                    <span className="subTitle">
                        Find the perfect Live Band for your Professional Hiring event. Book Now!
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for celebrities, actors, singers, etc...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button onClick={searchQueryHandler}>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
