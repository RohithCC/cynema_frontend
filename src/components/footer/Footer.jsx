import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">
            <Link to="/terms-condition" className="terms">
              Terms
            </Link>
          </li>
          <li className="menuItem">
            <Link to="/about" className="terms">
              About
            </Link>
          </li>
          <li className="menuItem">
            <Link to="/faq" className="terms">
              FAQ
            </Link>
          </li>
        </ul>

        <div className="infoText">
          Linzz is an event management company, which is bound to cater with
          excellent service and entertainment.
        </div>

        <div className="footerButtons">
          <a href="tel:+123456789" className="footerBtn">
            Call Us
          </a>
          <a href="mailto:info@linzz.com" className="footerBtn">
            Enquiry
          </a>
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

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/8147824401" // Replace with your WhatsApp number
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </footer>
  );
};

export default Footer;
