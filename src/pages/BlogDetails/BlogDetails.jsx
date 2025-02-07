import React from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import './BlogDetails.scss'; // Import CSS file for styling

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

  const BlogDetails = () => {
    const { id } = useParams(); // Get the id from the URL
    const blogPost = dummyData.find(post => post.id === parseInt(id)); // Find the post by id

    if (!blogPost) {
        return <div>Blog post not found.</div>; // Handle case where post is not found
    }

    return (
        <div className="blogDetails">
            <div className="blogContent">
                <h1 className="blogTitle">{blogPost.title}</h1>
                <h3 className="blogAuthor">
                    By {blogPost.author} on {dayjs(blogPost.date).format("MMM D, YYYY")}
                </h3>
                <img className="blogImage" src={blogPost.image} alt={blogPost.title} />
                <p className="blogDescription">{blogPost.description}</p>
            </div>
        </div>
    );
};

export default BlogDetails;
