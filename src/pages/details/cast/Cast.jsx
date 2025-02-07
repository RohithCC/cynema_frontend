import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading, endpoint }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const { id } = useParams(); // Get the dynamic route 'id'
    const [filteredData, setFilteredData] = useState([]);

    // useEffect hook to filter data and exclude the current id
    useEffect(() => {
        if (data && data.length > 0) {
            // Convert 'id' from string to number to match with item.id if necessary
            const currentId = Number(id);

            // Filter the data to exclude the item with the current id
            const filteredItems = data.filter((item) => item.id !== currentId);

            // Shuffle the filtered items and pick 5 random items
            const shuffledData = [...filteredItems].sort(() => 0.5 - Math.random());

            // Select the first 5 items after shuffling
            setFilteredData(shuffledData.slice(0, 5));
        }
    }, [id, data]); // Trigger whenever 'id' or 'data' changes

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div className="castSection">
            <ContentWrapper>
                <div className="sectionHeading">Similar Artists You May Like</div>
                {!loading ? (
                    <div className="listItems">
                        {filteredData?.map((item) => {
                            let imgUrl = item.profile_path
                                ? `https://res.cloudinary.com/dlkcxiz0l/image/upload/v1720598869/linzz/${item.profile_path}`
                                : avatar;
                            return (
                                <div
                                    key={item.id}
                                    className="listItem"
                                    onClick={() =>
                                        navigate(
                                            `/${item.media_type || endpoint}/${item.position}/${item.id}`
                                        )
                                    }
                                >
                                    <div className="profileImg">
                                        <Img src={imgUrl} />
                                    </div>
                                    <div className="name">{item.name}</div>
                                    <div className="character">{item.character}</div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="castSkeleton">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Cast;
