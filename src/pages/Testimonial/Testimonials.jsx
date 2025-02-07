import React, { useState, useEffect } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import "./style.scss";

// Dummy JSON data simulation for testimonials
const testimonialData = [
    {
        id: 1,
        name: "Client 1",
        description: "This service was amazing! Highly recommend it.",
          image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/6_avqbxd.jpg",
    },
    {
        id: 2,
        name: "Client 2",
        description: "A wonderful experience from start to finish!",
        image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/5_spoojn.jpg",
    },
    {
        id: 3,
        name: "Client 3",
        description: "I am extremely satisfied with the results.",
         image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/8_e2yean.jpg",
    },
    {
        id: 4,
        name: "Client 4",
        description: "Great team! They exceeded my expectations.",
        image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/8_e2yean.jpg",
    },
    {
        id: 5,
        name: "Client 5",
        description: "Professional and reliable, would use again!",
        image: "https://res.cloudinary.com/dlkcxiz0l/image/upload/v1727072609/8_e2yean.jpg",
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        let slideInterval;
        if (autoSlide) {
            slideInterval = setInterval(nextSlide, 5000);
        }
        return () => clearInterval(slideInterval);
    }, [autoSlide]);

    return (
        <div className="testimonialCarousel">
            <ContentWrapper>
                <div className="carouselControls">
                    <BsFillArrowLeftCircleFill className="arrow carouselLeftNav" onClick={prevSlide} />
                    <BsFillArrowRightCircleFill className="arrow carouselRightNav" onClick={nextSlide} />
                </div>
                <div className="testimonialContent">
                    <img src={testimonialData[currentIndex].image} alt={testimonialData[currentIndex].name} />
                    <div className="testimonialText">
                        <p className="client1">{testimonialData[currentIndex].description}</p>
                        <span className="clientName">{testimonialData[currentIndex].name}</span>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Testimonials;
