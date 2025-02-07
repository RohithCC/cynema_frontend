
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import "./style1.scss";
import VideosSection1 from "../details/videosSection/VideosSection1";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Spinner from "../../components/spinner/Spinner";

const sortbyData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Age Descending" },
    { value: "primary_release_date.asc", label: "Age Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];


const data3 = {
    items: [
        {
            id: 533535,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 1',
                    key: 'Zl6LSBouL0o',
                    site: 'YouTube',
                    overview: 'NAGUVA NAYANA | Anil Kapoor in Conversation with Vijay Prakash | 57th Bengaluru Ganesh Utsava 2019',
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
                    key: '-xHefPQtNvI',
                    site: 'YouTube',
                    overview: 'NAGUVA NAYANA | Pallavi Anupallavi | K S Chitra-Rajesh Krishnan | 55th Bengaluru Ganesh Utsava 2017',
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
                    key: 'KLJBEKA_XJw',
                    site: 'YouTube',
                    overview: 'JOTHEYALI JOTHE JOTHEYALI |Geetha| Rajesh Krishnan-Roopa Revati | 55th Bengaluru Ganesh Utsava 2017',
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
                    key: '5SzNY7JDZpU',
                    site: 'YouTube',
                    overview: 'ಎಸ್.ಪಿ.ಬಾಲಸುಬ್ರಮಣ್ಯಂ ಜೀವನ ಕಥೆ Part 2 | Weekend With Ramesh S2 | S. P. Balasubrahmanyam - Zee Kannada,',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533539,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: 'SGyvFNDNbdg',
                    site: 'YouTube',
                    overview: 'ರಿಯಲ್ ಸ್ಟಾರ್ ಉಪೇಂದ್ರ ಜೀವನದ ಕಥೆ | Weekend With Ramesh | Popular Show | Upendra - Zee Kannada',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533540,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: 'SrgXG9NHvSs',
                    site: 'YouTube',
                    overview: 'ಪುನೀತ್ ರಾಜ್ ಕುಮಾರ್ ಲೈಫ್ ಜರ್ನಿ | Weekend With Ramesh | S1 Episode 2 | Puneeth Rajkumar - Zee Kannada',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533541,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: 'NsdpgwvlwDs',
                    site: 'YouTube',
                    overview: 'Cardiologist Dr.C.N Manjunath | Weekend With Ramesh S5 | Full Ep 5 | Popular Show - Zee Kannada',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533542,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: '-MmGJS-wyAA',
                    site: 'YouTube',
                    overview: 'ಇನ್ಫೋಸಿಸ್‌ನ ಬೆನ್ನೆಲುಬು ಸುಧಾ ನಾರಾಯಣಮೂರ್ತಿ | Weekend With Ramesh S4 |Ep 12| Sudha Murthy - Zee Kannada',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533543,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: 'y8Vse_tayvA',
                    site: 'YouTube',
                    overview: 'EXCLUSIVE : Anchor Anushree Interviews Dimple Queen Rachita Ram | Anushree Anchor | Part 1',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533544,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: 'lbRMhuWF4Aw',
                    site: 'YouTube',
                    overview: 'ಕಿಚ್ಚ ಸುದೀಪ್ ಬಣ್ಣದ ಬದುಕು | Weekend With Ramesh Season 2 | Kichcha Sudeep | Episode 33 - Zee Kannada',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533545,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: 'zTHHxtr-xQs',
                    site: 'YouTube',
                    overview: 'Vijaya Raghavendras Love Story | ಚಿನ್ನಾರಿಮುತ್ತನ ಮುತ್ತುರತ್ನ | Weekend With Ramesh S3 - Zee Kannada',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533546,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: 'uo4rlnNhmB0',
                    site: 'YouTube',
                    overview: 'ರಾಧಿಕಾ ಪಂಡಿತ್ ಜೀವನ ಸ್ವಾರಸ್ಯ | Weekend With Ramesh | Full Episode 13 | Radhika Pandit - Zee Kannada',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533547,
            results: [
                {
                    iso_639_1: 'en',
                    iso_3166_1: 'US',
                    name: 'client 4',
                    key: 'KSFnjld85zs',
                    site: 'YouTube',
                    overview: 'ಮೋಹಕವಾದ ಜೊತೆ ಮುದ್ದಾದ ಸಂಚಿಕೆ ರಕ್ಷಿತ್ ಶೆಟ್ಟಿ | Weekend With Ramesh | Rakshit Shetty | | Zee Kannada',
                    client: "Rashmika"
                }
            ]
        },
        {
            id: 533548,
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
        },
        {
            id: 533549,
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
        },
        {
            id: 533550,
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
        },
        {
            id: 533551,
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
        },
        {
            id: 533552,
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
        },
        {
            id: 533553,
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
        },
        {
            id: 533554,
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
        // Add more items to test with more than 20 items
    ]
};

const genresData1 = {
    genres: [
        { id: 1, name: "Actor" },
        { id: 2, name: "Actress" },
        { id: 3, name: "Singer" },
        { id: 4, name: "Anchor" },
        { id: 5, name: "Entrepreneur" },
        { id: 6, name: "Fitness" },
        { id: 7, name: "Sports" },
        { id: 8, name: "Influencer" },
        { id: 9, name: "Comedian" },
    ],
};

const celebraties = {
    results: [
        { id: 1, name: "Celebrity 1", genre_ids: [1, 3] },
        { id: 2, name: "Celebrity 2", genre_ids: [2, 5] },
        // Add more data items...
    ],
    total_pages: 1,
};



const ITEMS_PER_PAGE = 4; // Number of items per page

const VideoSearch = () => {
    const [data, setData] = useState(celebraties);
    const [loading, setLoading] = useState(false);
    const [genre, setGenre] = useState(null);
    const [sortby, setSortby] = useState(null);
    const { mediaType } = useParams();
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalPages = Math.ceil(data3.items.length / ITEMS_PER_PAGE);

    // Fetch paginated items for the current page
    const paginatedItems = data3.items.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    // Initial data setup (this can be used to fetch or set up more advanced data)
    useEffect(() => {
        setData(celebraties);
    }, [mediaType]);

    return (
        <div className="explorePage">
            <ContentWrapper>
                <div className="pageHeader">
                    <div className="pageTitle">Explore Celebrities</div>
                    <div className="filters">
                        <Select
                            isMulti
                            name="genres"
                            value={genre}
                            closeMenuOnSelect={false}
                            options={genresData1?.genres}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.id}
                            onChange={setGenre}
                            placeholder="Select genres"
                            className="react-select-container genresDD"
                            classNamePrefix="react-select"
                        />

                        {/*  <Select
                            name="sortby"
                            value={sortby}
                            options={sortbyData}
                            onChange={setSortby}
                            isClearable={true}
                            placeholder="Sort by"
                            className="react-select-container sortbyDD"
                            classNamePrefix="react-select"
                        />*/}
                       

                    </div>
                </div>

                {loading ? (
                    <Spinner initial={true} />
                ) : (
                    <>
                        {paginatedItems.length > 0 ? (
                            <>
                                <div className="row" id="movievideo">
                                    {paginatedItems.map((item) => (
                                        <div className="col-6" id="movievideo1" key={item.id}>
                                            <VideosSection1
                                                data={item}
                                                loading={false}
                                                startIndex={0}
                                                endIndex={0}
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="pagination">
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        disabled={currentPage === 1}
                                    >
                                        Previous
                                    </button>
                                    <span>
                                        Page {currentPage} of {totalPages}
                                    </span>
                                    <button
                                        onClick={() => handlePageChange(currentPage + 1)}
                                        disabled={currentPage === totalPages}
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        ) : (
                            <span className="resultNotFound">
                                Sorry, Results not found!
                            </span>
                        )}
                    </>
                )}
            </ContentWrapper>
        </div>
    );
};

export default VideoSearch;

