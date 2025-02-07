import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);


    console.log(genres)

    return (
        <div className="genres" hidden>
            {data?.map((g) => {
                if (!genres[g]?.name) return;
                return (
                    <div key={g} 
                    className="genre"
                         id="test"
                    >
                        {genres[g]?.name}
                    </div>
                );
            })}
        </div>
    );
};

export default Genres;
