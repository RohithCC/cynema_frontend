import React, { useState } from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is Linzz?",
            answer: "Linzz is a dynamic platform for discovering, exploring, and booking entertainers. Whether you're looking for musicians, comedians, or speakers, we connect you with the best talent for your event."
        },
        {
            question: "How do I book an artist?",
            answer: "Booking an artist on Linzz is easy! Browse through our categories, select an artist you like, and click on the 'Book Now' button. Fill in the required details, and our team will get in touch with you to finalize the booking."
        },
        {
            question: "What types of artists can I find on Linzz?",
            answer: "We offer a diverse range of artists, including musicians, bands, DJs, dancers, comedians, speakers, and more. Whatever your event needs, we have the right talent to make it memorable."
        },
        {
            question: "How does Linzz ensure the quality of artists?",
            answer: "We have a rigorous vetting process to ensure the quality of artists listed on our platform. Each artist's profile includes reviews, ratings, and past performance details to help you make an informed decision."
        },
        {
            question: "Can I leave a review for an artist?",
            answer: "Yes, after your event, you can leave a review for the artist. Your feedback helps other users make better decisions and assists artists in improving their services."
        },
        {
            question: "Is there a customer support team available?",
            answer: "Absolutely! Our customer support team is available to assist you with any queries or issues. You can reach out to us via email, phone, or our website's contact form."
        }
    ];

    return (
        <div className="faqPage">
            <ContentWrapper>
                <div className="faqSection">
                    <h1 className="faqTitle">FAQs</h1>
                    {faqs.map((faq, index) => (
                        <div key={index} className="faqItem">
                            <div className="faqQuestion" onClick={() => toggleFaq(index)}>
                                {faq.question}
                                <span className="faqIcon">{activeIndex === index ? '-' : '+'}</span>
                            </div>
                            {activeIndex === index && (
                                <div className="faqAnswer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Faq;
