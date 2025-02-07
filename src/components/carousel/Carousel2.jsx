import React, { useRef, useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import VideosSection1 from "../../pages/details/videosSection/VideosSection1";
import "./style2.scss";

const Carousel2 = ({ data, loading, endpoint, title }) => {
    const [currentId, setCurrentId] = useState(533535); // Default to the first id
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    // Static JSON data
    const data3 = {
        items: [
            {
                id: 533535,
                results: [
                    {
                        iso_639_1: 'en',
                        iso_3166_1: 'US',
                        name: 'client 1',
                        key: 'vBGm-0GotoE',
                        site: 'YouTube',
                        overview: 'It was my first time experience with Linzz and I must say it was an absolute hit! INDER SAHANI-Dear Inder Sahani,',
                         client: "yash"
                    }
                ]
            },
            {
                id: 533536,
                results: [
                    {
                        iso_639_1: 'en',
                        iso_3166_1: 'US',
                        name: 'client 2',
                        key: 'h4Bp8cwZSJ8',
                        site: 'YouTube',
                        overview: 'It was my first time experience with Linzz and I must say it was an absolute hit! INDER SAHANI-Dear Inder Sahani,',
                        client: "rajesh krishna"
                    }
                ]
            },
            {
                id: 533537,
                results: [
                    {
                        iso_639_1: 'en',
                        iso_3166_1: 'US',
                        name: 'client 3',
                        key: 'IkQ7x9y_-8I',
                        site: 'YouTube',
                        overview: 'It was my first time experience with Linzz and I must say it was an absolute hit! INDER SAHANI-Dear Inder Sahani,',
                        client: "Rishab Shetty"
                    }
                ]
            },
            {
                id: 533538,
                results: [
                    {
                        iso_639_1: 'en',
                        iso_3166_1: 'US',
                        name: 'client 4',
                        key: 'SGyvFNDNbdg',
                        site: 'YouTube',
                        overview: 'It was my first time experience with Linzz and I must say it was an absolute hit! INDER SAHANI-Dear Inder Sahani,',
                        client: "Rashmika"
                    }
                ]
            }
        ]
    };

    const handleCarouselChange = (direction) => {
        const currentIndex = data3.items.findIndex(item => item.id === currentId);
        let newIndex = direction === "left" ? currentIndex - 1 : currentIndex + 1;
        newIndex = Math.max(0, Math.min(newIndex, data3.items.length - 1)); // Bound the index
        setCurrentId(data3.items[newIndex].id);
        const container = carouselContainer.current;
        const scrollAmount = direction === "left"
            ? container.scrollLeft - container.offsetWidth
            : container.scrollLeft + container.offsetWidth;

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    const currentData = data3.items.find(item => item.id === currentId) || { results: [] };

    const skItem = () => (
        <div className="carouselSkeletonItem">
            <div className="carouselPosterBlock skeleton"></div>
            <div className="carouselTextBlock">
                <div className="carouselTitle skeleton"></div>
                <div className="carouselDate skeleton"></div>
            </div>
        </div>
    );

    return (
        <div className="carousel2">
            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => handleCarouselChange("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRightNav arrow"
                    onClick={() => handleCarouselChange("right")}
                />
                {!loading ? (
                    <div className="carouselItems2" ref={carouselContainer} id="courselstem">
                        {data3.items.map((item) => {
                            const posterUrl = item.results[0]?.key
                                ? `https://img.youtube.com/vi/${item.results[0].key}/mqdefault.jpg`
                                : PosterFallback;
                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem2"
                                >
                                    <div className="carouselPosterBlock2">
                                       {/*   <Img src={posterUrl} alt={item.results[0]?.name || 'No Image'} />  */}
                                    </div>
                                    <div className="carouselTextBlock2">
                                        <div className="test">
                                            <div className="col-6">
                                                <VideosSection1
                                                    data={item}
                                                    loading={false}
                                                    startIndex={0}
                                                    endIndex={0} // Show only one video per slide
                                                />
                                            </div>
                                            <div className="col-6 overview">
                                                {item.results[0]?.overview}

                                                <span className="client-name">{ "  -"} {item.results[0]?.client}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                        {skItem()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Carousel2;
