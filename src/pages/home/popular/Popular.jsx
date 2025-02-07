import React, { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import Carousel1 from "../../../components/carousel/Carousel1";
import './style.scss'
const sampleData1 = {
    page: 1,
    results: [
        {
            "adult": false,
            "backdrop_path": "/Rajesh_krishna_ydxcpm.jpg",
            "genre_ids": [1],
            "id": 900000,
            "media_type": "movie",
            "position": "comedy_actor",
            "original_language": "en",
            "original_title": "Sadhu kokila",
            "overview": "Linzz stands out as a brilliant idea in an industry flooded with amateurs, delivering unmatched professionalism and effectiveness.",
            "popularity": 3116.984,
            "poster_path": "/Rajesh_krishna_ydxcpm.jpg",
            "release_date": "2024-05-08",
            "title": "Sadhu kokila",
            "video": false,
            "vote_average": 6.935,
            "vote_count": 1440
        },
        {
            "adult": false,
            "backdrop_path": "/uu4bvj8knkzhtfps080r.jpg",
            "genre_ids": [1],
            "id": 900001,
            "media_type": "movie",
            "position": "actor",
            "original_language": "en",
            "original_title": "Sudeep",
            "overview": "Recognized excellence by the top celebrities. Get the inside scoop - top celebrities share their thoughts on working with Linzz.",
            "popularity": 2804.235,
            "poster_path": "/uu4bvj8knkzhtfps080r.jpg",
            "release_date": "2015-05-15",
            "title": "Sudeep",
            "video": false,
            "vote_average": 7.582,
            "vote_count": 18564
        },
        {
            "adult": false,
            "backdrop_path": "/uu4bvj8knkzhtfps080r.jpg",
            "genre_ids": [1],
            "id": 900002,
            "media_type": "movie",
            "position": "actor",
            "original_language": "en",
            "original_title": "Sudeep",
            "overview": "Perfect for budding artists. Here you are dealing with professional service with thorough documentation. Highly satisfied and recommend.",
            "popularity": 2804.235,
            "poster_path": "/uu4bvj8knkzhtfps080r.jpg",
            "release_date": "2015-05-15",
            "title": "Sudeep",
            "video": false,
            "vote_average": 7.582,
            "vote_count": 18564
        },
        {
            "adult": false,
            "backdrop_path": "/uu4bvj8knkzhtfps080r.jpg",
            "genre_ids": [1],
            "id": 900003,
            "media_type": "movie",
            "position": "actor",
            "original_language": "en",
            "original_title": "Sudeep",
            "overview": "It was my first time experience with Linzz and I must say it was an absolute hit!",
            "popularity": 2804.235,
            "poster_path": "/uu4bvj8knkzhtfps080r.jpg",
            "release_date": "2015-05-15",
            "title": "Sudeep",
            "video": false,
            "vote_average": 7.582,
            "vote_count": 18564
        },
        {
            "adult": false,
            "backdrop_path": "/uu4bvj8knkzhtfps080r.jpg",
            "genre_ids": [1],
            "id": 900004,
            "media_type": "movie",
            "position": "actor",
            "original_language": "en",
            "original_title": "Sudeep",
            "overview": "It was my first time experience with Linzz and I must say it was an absolute hit!",
            "popularity": 2804.235,
            "poster_path": "/uu4bvj8knkzhtfps080r.jpg",
            "release_date": "2015-05-15",
            "title": "Sudeep",
            "video": false,
            "vote_average": 7.582,
            "vote_count": 18564
        },
        {
            "adult": false,
            "backdrop_path": "/uu4bvj8knkzhtfps080r.jpg",
            "genre_ids": [1],
            "id": 900005,
            "media_type": "movie",
            "position": "actor",
            "original_language": "en",
            "original_title": "Sudeep",
            "overview": "It was my first time experience with Linzz and I must say it was an absolute hit!",
            "popularity": 2804.235,
            "poster_path": "/uu4bvj8knkzhtfps080r.jpg",
            "release_date": "2015-05-15",
            "title": "Sudeep",
            "video": false,
            "vote_average": 7.582,
            "vote_count": 18564
        }
    ]
};

const Popular = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const [data, setData] = useState(sampleData1);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
        // Set data accordingly if switching between static datasets for movies and TV shows
        // setData(tab === "Movies" ? sampleData1 : sampleData2); // Uncomment if you have another dataset
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="clients" id="clientstem">Top Linzz Clients</span>
                <SwitchTabs
                    data={["Movies", "TV Shows"]}
                    onTabChange={onTabChange}
                />
            </ContentWrapper>
            <Carousel1
                data={data.results}
                loading={false}
                endpoint={endpoint}
            />
        </div>
    );
};

export default Popular;
