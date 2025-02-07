import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Genres from "../../../components/genres/Genres";
import CircleRating from "../../../components/circleRating/CircleRating";
import Img from "../../../components/lazyLoadImage/Img.jsx";
import PosterFallback from "../../../assets/no-poster.png";
import { PlayIcon } from "../Playbtn";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import test from './data.json';
import Genres1 from "../../../components/genres/Genres1.jsx";

const DetailsBanner = ({ video, crew }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const { mediaType, id } = useParams();
    const { url } = useSelector((state) => state.home);

    // Find the matching data from the imported JSON and the crew
    let data = crew.find((f) => f.id == id);
    let videoData = video.find((v) => v.id == id);

    const _genres = data?.genres?.map((g) => g.id);

    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    const handleClick = () => {
        if (id) {
            navigate(`/cart/checkout/${id}`);
        } else {
            console.error('ID is not defined');
        }
    };

    return (
        <div className="detailsBanner">
            {!!data ? (
                <>
                    <div className="backdrop-img">
                        <Img src={`https://res.cloudinary.com/dlkcxiz0l/image/upload/v1720598869/linzz/${data.backdrop_path}`} />
                    </div>
                    <div className="opacity-layer"></div>
                    <ContentWrapper>
                        <div className="content">
                            <div className="left">
                                {data.poster_path ? (
                                    <Img
                                        className="posterImg"
                                        src={`https://res.cloudinary.com/dlkcxiz0l/image/upload/v1720598869/linzz/${data.poster_path}`}
                                    />
                                ) : (
                                    <Img
                                        className="posterImg"
                                        src={PosterFallback}
                                    />
                                )}
                            </div>
                            <div className="right">
                                <div className="title">
                                    {data.name || data.title}
                                </div>
                                <div className="subtitle">
                                    {data.tagline}
                                </div>
                                <div className="pricealign">
                                    <Genres1
                                        data={_genres}
                                        id={id}
                                        onClick={handleClick}
                                    />
                                </div>
                              

                                {/*   <div className="row">
                                    <CircleRating
                                        rating={data.vote_average.toFixed(1)}
                                    />
                                    <div
                                        className="playbtn"
                                        onClick={() => {
                                            setShow(true);
                                            setVideoId(videoData.key);
                                        }}
                                       
                                    >
                                        <PlayIcon />
                                        <span className="text">Watch portfolio</span>
                                    </div>
                                </div> */}
                                <div className="overview">
                                    <div className="heading">Profile </div>
                                    <div className="description">{data.overview}</div>
                                </div>
                                <div className="info">

                                        {/*         {data.status && (
                                                <div className="infoItem">
                                                    <span className="text bold">Status: </span>
                                                    <span className="text">{data.status}</span>
                                                </div>
                                            )}
                                            {data.birth_date && (
                                                <div className="infoItem">
                                                    <span className="text bold">Birth Date: </span>
                                                    <span className="text">{dayjs(data.birth_date).format("MMM D, YYYY")}</span>
                                                </div>
                                            )}
                                            {data.age && (
                                                <div className="infoItem">
                                                    <span className="text bold">Age: </span>
                                                    <span className="text">{data.age}</span>
                                                </div>
                                            )}  */}
                                    


                                            {/* Social Media Icons */}
                                          <div className="socialIcons">
                                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                                    <FaFacebook className="socialIcon fb" />
                                                </a>
                                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                                    <FaInstagram className="socialIcon ig" />
                                                </a>
                                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                                    <FaTwitter className="socialIcon tw" />
                                                </a>
                                            </div>
                                        </div>
                                {data?.created_by?.length > 0 && (
                                    <div className="info">
                                        <span className="text bold">Creator: </span>
                                        <span className="text">
                                            {data?.created_by?.map((d, i) => (
                                                <span key={i}>
                                                    {d.name}
                                                    {data?.created_by.length - 1 !== i && ", "}
                                                </span>
                                            ))}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <VideoPopup
                            show={show}
                            setShow={setShow}
                            videoId={videoId}
                            setVideoId={setVideoId}
                        />
                    </ContentWrapper>
                </>
            ) : (
                <div className="detailsBannerSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    );
};

export default DetailsBanner;
