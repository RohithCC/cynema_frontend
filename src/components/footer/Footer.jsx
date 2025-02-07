import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">
                        <Link to="/terms-condition" className="terms">Terms</Link>
                    </li>
                    {/* Uncomment the privacy link if needed */}
                    {/*<li className="menuItem">
                        <Link to="/privacy" className="terms">Privacy</Link>
                    </li>*/}
                    <li className="menuItem">
                        <Link to="/about" className="terms">About</Link>
                    </li>
                    <li className="menuItem">
                        <Link to="/faq" className="terms">FAQ</Link>
                    </li>
                </ul>

                <div className="infoText">
                    Linzz is an event management company, which is bound to cater with excellent service and entertainment.
                </div>

                {/* New buttons for Call Us and Enquiry */}
                <div className="footerButtons">
                    {/* Phone link for Call Us button */}
                    <a href="tel:+123456789" className="footerBtn">Call Us</a>

                    {/* Mailto link for Enquiry button */}
                    <a href="mailto:info@linzz.com" className="footerBtn">Enquiry</a>
                </div>

                <div className="socialIcons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaFacebookF className="ic" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaInstagram className="ic" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaTwitter className="ic" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="icon">
                        <FaLinkedin className="ic" />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
