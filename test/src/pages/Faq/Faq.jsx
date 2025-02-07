import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const Faq = () => {
    return (
        <div className="faqPage">
            <ContentWrapper>
                <div className="faqSection">
                    <h1 className="faqTitle">FAQs</h1>
                    <div className="faqItem">
                        <h2 className="faqQuestion">What is Linzz?</h2>
                        <p className="faqAnswer">Linzz is a dynamic platform for discovering, exploring, and booking entertainers. Whether you're looking for musicians, comedians, or speakers, we connect you with the best talent for your event.</p>
                    </div>
                    <div className="faqItem">
                        <h2 className="faqQuestion">How do I book an artist?</h2>
                        <p className="faqAnswer">Booking an artist on Linzz is easy! Browse through our categories, select an artist you like, and click on the 'Book Now' button. Fill in the required details, and our team will get in touch with you to finalize the booking.</p>
                    </div>
                    <div className="faqItem">
                        <h2 className="faqQuestion">What types of artists can I find on Linzz?</h2>
                        <p className="faqAnswer">We offer a diverse range of artists, including musicians, bands, DJs, dancers, comedians, speakers, and more. Whatever your event needs, we have the right talent to make it memorable.</p>
                    </div>
                    <div className="faqItem">
                        <h2 className="faqQuestion">How does Linzz ensure the quality of artists?</h2>
                        <p className="faqAnswer">We have a rigorous vetting process to ensure the quality of artists listed on our platform. Each artist's profile includes reviews, ratings, and past performance details to help you make an informed decision.</p>
                    </div>
                    <div className="faqItem">
                        <h2 className="faqQuestion">Can I leave a review for an artist?</h2>
                        <p className="faqAnswer">Yes, after your event, you can leave a review for the artist. Your feedback helps other users make better decisions and assists artists in improving their services.</p>
                    </div>
                    <div className="faqItem">
                        <h2 className="faqQuestion">Is there a customer support team available?</h2>
                        <p className="faqAnswer">Absolutely! Our customer support team is available to assist you with any queries or issues. You can reach out to us via email, phone, or our website's contact form.</p>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default Faq;
