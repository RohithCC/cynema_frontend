import React, { useRef, useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";
import Genres1 from "../genres/Genres1";

import "./style.scss";

const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const [visibleItems, setVisibleItems] = useState(10); // Initial number of items
    const [showLoadMore, setShowLoadMore] = useState(true); // Control visibility of "Load More"


    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

    // Function to load more items
      // Function to load more items (Navigate to a new page)
      const handleLoadMore = () => {
        navigate("/explore/movie", { state: { currentData: data, endpoint } });
    };

    const skItem = () => {
        return (
            <div className="skeletonItem">
                <div className="posterBlock skeleton"></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        );
    };

    return (
        <div className="carousel">
            <ContentWrapper>
                {title && <div className="carouselTitle" hidden>{title}</div>}
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                 
                    {console.log(data)}
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback;
                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem"
                                    onClick={() =>
                                        navigate(
                                            `/${item.media_type || endpoint}/${item.position}/${
                                                item.id
                                            }`
                                        )
                                    }
                                    
                                >
                                    <div className="posterBlock" hidden>
                                 
                                   
                                        <Img src={`https://res.cloudinary.com/dlkcxiz0l/image/upload/v1720598869/linzz/`+item.poster_path} />
                                        <CircleRating
                                            rating={item.vote_average.toFixed(
                                                1
                                            )}
                                        />
                                        {/*<Genres
                                            data={item.genre_ids.slice(0, 2)}
                                            
                                        />*/}
                                        <Genres1  />
                                    </div>
                                    <div className="textBlock" hidden>
                                        <span className="title" hidden>
                                            {item.title || item.name}
                                        </span>
                                        <span className="date" hidden>
                                            {dayjs(item.release_date || item.first_air_date).format(
                                                "MMM D, YYYY"
                                            )}
                                        </span>
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
                                                    {/* Load More Button */}
                            {!loading && showLoadMore && (
                                <div className="loadMoreContainer">
                                    <button className="loadMoreButton" onClick={handleLoadMore}>
                                        <span className="loadMoreText">Load More</span>
                                    </button>
                                </div>
                            )}

            </ContentWrapper>
        </div>
    );
};

export default Carousel;
