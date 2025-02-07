import React, { useState } from "react";

import "./style1.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../Playbtn";

const VideosSection1 = ({ data, loading, startIndex = 0, endIndex = 1 }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    // Slice the data to get a subset of videos
    const videosToRender = data?.results?.slice(startIndex, endIndex + 1) || [];
    console.log(data)
    console.log(videosToRender);

    return (
        <div className="videosSection">
            <ContentWrapper>
                {!loading ? (
                    <div className="videos">
                        {videosToRender.map((video) => (
                            <div
                                key={video.key}
                                className="videoItem"
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="videoThumbnail">
                                    <Img
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                        className='imgyoutube'
                                    />
                                    <PlayIcon />
                                </div>
                                {/*   <div className="sectionHeading">Client Says About Linzz</div>
                                <div className="videoTitle">{video.name}</div>*/}
                              
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideosSection1;
