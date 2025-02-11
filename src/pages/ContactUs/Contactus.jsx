import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const ContactUs = () => {
    return (
        <div className="contactPage" style={{ minHeight: "60vh" }}>
            <ContentWrapper>
                <div className="contactContainer">
                    {/* Left Side - Google Map */}
                    <div className="contactMap">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.3658606166435!2d77.57150837494348!3d13.010752313407257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178f7c2b20a1%3A0xb3c6f7df97a8d4fc!2sMantri%20Square%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="contactForm">
                        <h1 className="contactTitle">Contact Us</h1>
                        <form>
                            <div className="formGroup">
                                <label>Name</label>
                                <input type="text" placeholder="Enter your name" required />
                            </div>
                            <div className="formGroup">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your email" required />
                            </div>
                            <div className="formGroup">
                                <label>Phone</label>
                                <input type="text" placeholder="Enter your phone number" required />
                            </div>
                            <div className="formGroup">
                                <label>Inquiry</label>
                                <textarea placeholder="Enter your message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submitButton">Submit</button>
                        </form>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default ContactUs;
