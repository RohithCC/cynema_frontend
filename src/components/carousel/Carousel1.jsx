import React, { useRef } from "react";
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
import Genres1 from "../genres/Genres1";

import "./style1.scss";

const Carousel1 = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    const navigation = (dir) => {
        const container = carouselContainer.current;
        const scrollAmount = dir === "left"
            ? container.scrollLeft - container.offsetWidth
            : container.scrollLeft + container.offsetWidth;

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

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
        <div className="carousel1">
            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRightNav arrow"
                    onClick={() => navigation("right")}
                />
                {!loading ? (
                    <div className="carouselItems" ref={carouselContainer}>
                        {data?.map((item) => {
                            const posterUrl = item.poster_path
                                ? url.poster + item.poster_path
                                : PosterFallback;
                            return (
                                <div
                                    key={item.id}
                                    className="carouselItem"
                                    onClick={() =>
                                        navigate(`/${item.media_type || endpoint}/${item.id}`)
                                    }
                                >
                                    <div className="carouselPosterBlock">
                                        <div className="backdrop-imgcourosel">
                                    {/*     <Img src={`https://res.cloudinary.com/dlkcxiz0l/image/upload/v1721981199/linzz/${item.poster_path}`} alt={item.title || item.name} />
                                     */}  
                                     </div>
                                      
                                
                                    </div>
                                    <div className="carouselTextBlock">
                                    <div className="wrap">

                                        <span className="carouselTitle">
                                            {item.overview || item.overview}
                                        </span>
                                    {/*     <span className="carouselDate">
                                            {dayjs(item.release_date || item.first_air_date).format(
                                                "MMM D, YYYY"
                                            )}
                                        </span>  */}
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

export default Carousel1;
