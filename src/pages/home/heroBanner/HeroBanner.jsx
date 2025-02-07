import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.scss";

import useFetch from "../../../hooks/useFetch";

import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import test from './data.json';

const HeroBanner = () => {
    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    let data1 =    [
        {
            "adult": false,
            "backdrop_path": "/v1727081314/Puneeth_Rajakumara_Tribute_Kannada_Video____Hd_Video____Kabza____Appu_Tribute____M_R_Beatz_01_nh2weh.mp4",
            "genre_ids": [1, 2, 3, 4],
            "id": 1022789,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726899894/Yash_on_KGF_3_shorts_ecwbqo.mp4", 
            "genre_ids": [1, 2, 3, 4],
            "id": 519182,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1727081314/Puneeth_Rajakumara_Tribute_Kannada_Video____Hd_Video____Kabza____Appu_Tribute____M_R_Beatz_01_nh2weh.mp4",
            "genre_ids": [1, 2, 3, 4],
            "id": 748783,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1727081809/HBD_shankar_nag_sir__shankar_nag_and_vishnuvardhan__WhatsApp_status__HD_full_screen__benki_birugali_l71qw0.mp4",
            "genre_ids": [1, 2],
            "id": 646683,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 718821,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2],
            "id": 746036,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2],
            "id": 1214509,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 14836,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 948549,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1],
            "id": 938614,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 1226578,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2],
            "id": 1242372,
            "original_language": "zh"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 974635,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 938250,
            "original_language": "fr"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2],
            "id": 1008409,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 1104844,
            "original_language": "ja"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 945961,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2],
            "id": 858017,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2, 3],
            "id": 1023922,
            "original_language": "en"
        },
        {
            "adult": false,
            "backdrop_path": "/v1726898680/Pehla_Pehla_song_sing_by_Rajesh_Krishna_SPB_VOICE_orangetv_dvcubc.mp4",
            "genre_ids": [1, 2],
            "id": 4011,
            "original_language": "en"
        }
    ]
    

    const texts = [
        "Welcome to Linzz",
        "Book a Comedian",
        "Book a Singer",
        "Book an Anchor",
        "Book Live Band",
         "Book an Actor",
         "Book an Actress",
         "Book a Celebraties"

    ];

    useEffect(() => {
        const bg =
            `https://res.cloudinary.com/dlkcxiz0l/video/upload` +
            data1?.[Math.floor(Math.random() * data1.length)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 5000); // Change text every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };

    return (
        <div className="heroBanner">
        {console.log(background)}
        {!loading && (
            <div className="backdrop-img">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src={background} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )}
        
            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">{texts[currentTextIndex]}</span>
                    <span className="subTitle">
                        Find the perfect Live Band for your Professional Hiring event. Book Now!
                    </span>
                    <div className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a Celebraties , Actor Singer etc...."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                        />
                        <button>Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;
