import React, { useState, useEffect } from "react";
import { HiOutlineSearch, HiOutlineFilm } from "react-icons/hi";
import { MdOutlineTv } from "react-icons/md"; // Importing TV icon from Material Design
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { GiCardJoker } from "react-icons/gi";
import { FaMusic } from "react-icons/fa";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaSearchPlus } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { RiUserSearchFill } from "react-icons/ri";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const controlNavbar = () => {
        if (window.scrollY > 200) {
            if (window.scrollY > lastScrollY && !mobileMenu) {
                setShow("hide");
            } else {
                setShow("show");
            }
        } else {
            setShow("top");
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", controlNavbar);
        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, [lastScrollY]);

    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
            setTimeout(() => {
                setShowSearch(false);
            }, 1000);
        }
    };

    const openSearch = () => {
        setMobileMenu(false);
        setShowSearch(true);
    };

    const openMobileMenu = () => {
        setMobileMenu(true);
        setShowSearch(false);
    };

    const navigationHandler = (type) => {
        if (type === "movie") {
            navigate("/explore/movie");
        } else {
            navigate("/explore/tv");
        }
        setMobileMenu(false);
    };

    return (
        <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
            <ContentWrapper>
                <div className="logo" onClick={() => navigate("/")}>
                    <img src={logo} alt="" />
                </div>
                <ul className={`menuItems ${mobileMenu ? "open" : ""}`}>
                    <li className="menuItem">
                        <div onClick={() => navigationHandler("movie")}>
                        <RiUserSearchFill />
                            Home Page
                        </div>
                        <ul className="submenu">
                            <li className="submenuItem" onClick={() => navigate("/dashboard/actor")}>{/*  <BsPersonCircle />*/}  Actor</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/actress")}> {/* <GiCardJoker /> */}    Actress</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/Sports")}> {/*  <GiCardJoker /> */}   Sports</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/Entrepreneur")}>{/* <FaMusic />*/}   Enterprenuer</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/Comedy Actor")}> {/*  <FaMusic /> */} Comedian</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/Singer")}> {/*<MdOutlineTv />  */}Singer</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/Anchor")}>{/* <MdOutlineTv /> */} Anchor</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/Influencer")}> {/*<MdOutlineTv />  */}Influencer</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/Fitness")}> {/*<MdOutlineTv />  */} Fitness</li>
                            <li className="submenuItem" onClick={() => navigate("/dashboard/other")}>  {/* <MdOutlineTv />*/}  Others</li>
                            </ul>
                    </li>
                    <li className="menuItem">
                    <div onClick={() => navigationHandler("movie")}>
                    <RiUserSearchFill />
                        About Us
                    </div>
                    <ul className="submenu">
                    <li className="submenuItem" onClick={() => navigate("/blog")}>{/*  <BsPersonCircle />*/}  Blogs</li>
                    <li className="submenuItem" onClick={() => navigate("/video")}> {/* <GiCardJoker /> */}    Videos</li>
                    <li className="submenuItem" onClick={() => navigate("/testimonial")}> {/*  <GiCardJoker /> */}   Testimonial</li>
                  </ul>
                    </li>
                    <li className="menuItem">
                        <div onClick={() => navigationHandler("tv")}>
                        <RiLoginCircleFill />
                          Contact Us
                        </div>
                        <ul className="submenu">
                            <li className="submenuItem" onClick={() => navigate("/contactus")}>contact us</li>
                            <li className="submenuItem" onClick={() => navigate("/ourteam")}>Ourteam</li>
                        </ul>
                    </li>
                    <li className="menuItem searchIcon">
                        <BsSearch  onClick={openSearch} />
                    </li>
                </ul>
                <div className="mobileMenuItems">
                    <HiOutlineSearch onClick={openSearch} />
                    {mobileMenu ? (
                        <VscChromeClose onClick={() => setMobileMenu(false)} />
                    ) : (
                        <SlMenu onClick={openMobileMenu} />
                    )}
                </div>
            </ContentWrapper>
            {showSearch && (
                <div className="searchBar">
                    <ContentWrapper>
                        <div className="searchInput">
                            <input
                                type="text"
                                placeholder="Search for a celebraties , actor Singer etc...."
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler}
                            />
                            <VscChromeClose onClick={() => setShowSearch(false)} />
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </header>
    );
};

export default Header;
