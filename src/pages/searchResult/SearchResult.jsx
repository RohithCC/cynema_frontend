import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";
import noResults from "../../assets/no-results.png";
import mockData from '../details/detailsBanner/data.json';



const SearchResult = () => {
    const [data, setData] = useState([]);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { query } = useParams();

    const fetchInitialData = () => {
        setLoading(true);
        // Simulate fetching data from an API
        setTimeout(() => {
            // Filter the mockData based on the search query
            const filteredData = mockData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setData(filteredData);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query]);

    return (
        <div className="searchResultsPage">
            {loading && <Spinner initial={true} />}
            {!loading && (
                <ContentWrapper>
                    {data?.length > 0 ? (
                        <>
                            <div className="pageTitle">
                                {`Search ${
                                    data.length > 1 ? "results" : "result"
                                } of '${query}'`}
                            </div>
                            <InfiniteScroll
                                className="content"
                                dataLength={data.length || []}
                                next={fetchInitialData} // No need to fetch more data since we're using mock data
                                hasMore={false} // Disable further data fetching
                                loader={<Spinner />}
                            >
                                {console.log(data)}
                                {data.map((item, index) => (
                                    <MovieCard
                                        key={index}
                                        data={item}
                                        fromSearch={true}
                                    />
                                ))}
                            </InfiniteScroll>
                        </>
                    ) : (
                        <span className="resultNotFound">
                            Sorry, Results not found!
                        </span>
                    )}
                </ContentWrapper>
            )}
        </div>
    );
};

export default SearchResult;
