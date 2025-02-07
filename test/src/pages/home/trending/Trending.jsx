import React, { useState, useEffect } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import './trending.scss';

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const { data: apiData, loading: apiLoading } = useFetch(`/trending/movie/${endpoint}`);

    useEffect(() => {
        if (!apiLoading && apiData && apiData.results) {
            // Filter the data based on popularity thresholds
            const filteredData = {
                results: apiData.results.filter(item => {
                    const popularity = item.popularity || 0; // Default to 0 if popularity is undefined
                    switch (endpoint) {
                        case "day":
                            return popularity < 150;
                        case "week":
                            return popularity < 500;
                        case "comedian":
                            return popularity < 1000;
                        case "dj":
                            return popularity < 2000;
                        case "anchor":
                            return popularity < 3000;
                        case "host":
                            return popularity >= 3000;
                        default:
                            return false;
                    }
                })
            };
            setData(filteredData);
            setLoading(false);
        }
    }, [apiLoading, apiData, endpoint]);

    const handlePopularityClick = (popularityLevel) => {
        // Determine the endpoint based on the popularity level clicked
        let newEndpoint = "day"; // Default to "day" if no specific popularity level matches
        switch (popularityLevel) {
            case 1:
                newEndpoint = "actor";
                break;
            case 2:
                newEndpoint = "singer";
                break;
            case 3:
                newEndpoint = "comedian";
                break;
            case 4:
                newEndpoint = "dj";
                break;
            case 5:
                newEndpoint = "anchor";
                break;
            case 6:
                newEndpoint = "host";
                break;
            default:
                newEndpoint = "day";
                break;
        }
        setEndpoint(newEndpoint);
    };

    return (
        <div className="carouselSection">
                    <ContentWrapper className="contentWrapper">
                    <span className="carouselTitle" onClick={() => handlePopularityClick(1)}>Actor</span>
                    <span className="carouselTitle" onClick={() => handlePopularityClick(2)}>Singer</span>
                    <span className="carouselTitle" onClick={() => handlePopularityClick(3)}>Comedian</span>
                    <span className="carouselTitle" onClick={() => handlePopularityClick(4)}>DJ</span>
                    <span className="carouselTitle" onClick={() => handlePopularityClick(5)}>Anchor</span>
                    <span className="carouselTitle" onClick={() => handlePopularityClick(6)}>Host</span>
                    <SwitchTabs
                        data={["Day", "Week"]}
                        onTabChange={(tab) => setEndpoint(tab === "Day" ? "day" : "week")}
                    />
                  </ContentWrapper>
    
            {/* Render the Carousel component with filtered data */}
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
};

export default Trending;
