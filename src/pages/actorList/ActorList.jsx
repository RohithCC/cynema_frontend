import React from "react";
import MovieCard from "../../components/movieCard/MovieCard";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../../components/spinner/Spinner";

const ActorList = ({ data }) => {
  return (
    <div>
      {data?.results?.length > 0 ? (
        <InfiniteScroll
          className="content"
          dataLength={data?.results?.length || 0}
          hasMore={false} // Assuming no pagination is needed for actor-specific list
          loader={<Spinner />}
        >
          {data?.results
            .filter((item) => item.genre_ids.includes(1)) // Filter actors by genre ID
            .map((item, index) => (
              <MovieCard key={index} data={item} mediaType="actor" />
            ))}
        </InfiniteScroll>
      ) : (
        <span className="resultNotFound">No actors found!</span>
      )}
    </div>
  );
};

export default ActorList;
