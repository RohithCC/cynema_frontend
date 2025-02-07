import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Img from "../../components/lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";

import "./style.scss";

const dummyData = [
  {
      id: 1,
      title: "Blog Post 1",
      author: "Author 1",
      date: "2023-08-01",
      description: "This is the description for Blog Post 1.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/6_avqbxd.jpg"
  },
  {
      id: 2,
      title: "Blog Post 2",
      author: "Author 2",
      date: "2023-08-02",
      description: "This is the description for Blog Post 2.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/5_spoojn.jpg"
  },
  {
      id: 3,
      title: "Blog Post 3",
      author: "Author 3",
      date: "2023-08-03",
      description: "This is the description for Blog Post 3.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/8_e2yean.jpg"
  },
  // Add more dummy data (at least 10 items)
  {
      id: 4,
      title: "Blog Post 4",
      author: "Author 4",
      date: "2023-08-04",
      description: "This is the description for Blog Post 4.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/4_gm3j2r.webp"
  },
  {
      id: 5,
      title: "Blog Post 5",
      author: "Author 5",
      date: "2023-08-05",
      description: "This is the description for Blog Post 5.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/9_k22mft.jpg"
  },
  {
      id: 6,
      title: "Blog Post 6",
      author: "Author 6",
      date: "2023-08-06",
      description: "This is the description for Blog Post 6.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072610/3_kdikht.jpg"
  },
  {
      id: 7,
      title: "Blog Post 7",
      author: "Author 7",
      date: "2023-08-07",
      description: "This is the description for Blog Post 7.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072610/7_oxklju.jpg"
  },
  {
      id: 8,
      title: "Blog Post 8",
      author: "Author 8",
      date: "2023-08-08",
      description: "This is the description for Blog Post 8.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072611/1_j2kily.jpg"
  },
  {
      id: 9,
      title: "Blog Post 9",
      author: "Author 9",
      date: "2023-08-09",
      description: "This is the description for Blog Post 9.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072611/1_j2kily.jpg"
  },
  {
      id: 10,
      title: "Blog Post 10",
      author: "Author 10",
      date: "2023-08-10",
      description: "This is the description for Blog Post 10.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072611/1_j2kily.jpg"
  },
  {
      id: 11,
      title: "Blog Post 11",
      author: "Author 11",
      date: "2023-08-11",
      description: "This is the description for Blog Post 11.",
      image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072611/1_j2kily.jpg"
  }
];


const Blog = ({ title }) => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [visibleItems, setVisibleItems] = useState(8);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setData(dummyData);
            setLoading(false);
        };
        fetchData();
    }, []);

    const skItem = () => (
        <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    );

    return (
        <div className="blogList">
            <ContentWrapper>
                {title && <div className="blogTitle">{title}</div>}
                {!loading ? (
                    <div className="blogItems">
                        {data?.slice(0, visibleItems).map((item) => {
                            const posterUrl = item.image ? item.image : PosterFallback;

                            return (
                                <div
                                    key={item.id}
                                    className="blogItem"
                                    onClick={() => navigate(`/blog/${item.id}`)} // Use id for routing
                                >
                                    <div className="posterBlock">
                                        <Img src={posterUrl} alt={item.title} />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">{item.title}</span>
                                        <br />
                                        <span className="author">By {item.author}</span>
                                        <br />
                                        <span className="date">
                                            {dayjs(item.date).format("MMM D, YYYY")}
                                        </span>
                                        <br />
                                        <p className="description">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="loadingSkeleton">
                        {Array.from({ length: 8 }, (_, index) => skItem())} {/* Simplified skeleton loader */}
                    </div>
                )}
                {/* Load More Button */}
                {!loading && visibleItems < data.length && (
                    <div className="loadMoreContainer">
                        <button
                            className="loadMoreButton"
                            onClick={() => setVisibleItems(visibleItems + 5)}
                        >
                            <span className="loadMoreText">Load More</span>
                        </button>
                    </div>
                )}
            </ContentWrapper>
        </div>
    );
};

export default Blog;
