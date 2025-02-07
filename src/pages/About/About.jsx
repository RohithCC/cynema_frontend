import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const About = () => {
    return (
        <div className="aboutPage">
            <ContentWrapper>
                <div className="aboutSection">
                    <h1 className="aboutTitle">Let's talk about </h1>
                    <p className="aboutText">
                        The Movie Database XXXXXXX  is a community built movie and TV database. Every piece of data has been added by our amazing community dating back to 2024. 's strong international focus and breadth of data is largely unmatched and something we're incredibly proud of. Put simply, we live and breathe community and that's precisely what makes us different.
                    </p>
                </div>
                <div className="aboutSection">
                    <h2 className="aboutSubtitle">The  advantage</h2>
                    <div className="advantage">
                        <div className="advantageItem">
                            <span className="advantageNumber">1</span>
                            <p className="advantageText">Every year since 2024, the number of contributions to our database has increased (check out our last years wrap!) With over 10 developers and companies using our platform,  has become a premiere source for metadata.</p>
                        </div>
                        <div className="advantageItem">
                            <span className="advantageNumber">2</span>
                            <p className="advantageText">Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart. On average, over 1,000 images are added every single day.</p>
                        </div>
                        <div className="advantageItem">
                            <span className="advantageNumber">3</span>
                            <p className="advantageText">We're international. While we officially support 39 languages we also have extensive regional data. Every single day  is used in over 5 countries.</p>
                        </div>
                        <div className="advantageItem">
                            <span className="advantageNumber">4</span>
                            <p className="advantageText">Our community is second to none. Between our staff and community moderators, we're always here to help. We're passionate about making sure your experience on  is nothing short of amazing.</p>
                        </div>
                        <div className="advantageItem">
                            <span className="advantageNumber">5</span>
                            <p className="advantageText">Trusted platform. Every single day our service is used by millions of people while we process over 3 billion requests. We've proven for years that this is a service that can be trusted and relied on.</p>
                        </div>
                    </div>
                </div>
                <div className="aboutSection">
                    <h2 className="aboutSubtitle">Contact </h2>
                    <p className="aboutText">The  product, service, attitude and support are truly top notch. We love how they support their community and the passion with which they have built an amazing asset that our users can enjoy!</p>
                    <p className="quoteAuthor">Scott Olechowski, Chief Product Officer & Co-founder of Plex, Inc.</p>
                </div>
                <div className="aboutSection">
                    <h2 className="aboutSubtitle">Stats</h2>
                    <p className="aboutText">We all love them. Here's a few that we find interesting.</p>
                    <div className="stats">
                        <div className="statItem"><span className="statNumber">940,404</span><span className="statLabel">Movies*</span></div>
                        <div className="statItem"><span className="statNumber">173,950</span><span className="statLabel">TV Shows*</span></div>
                        <div className="statItem"><span className="statNumber">290,239</span><span className="statLabel">TV Seasons</span></div>
                        <div className="statItem"><span className="statNumber">4,647,888</span><span className="statLabel">TV Episodes</span></div>
                        <div className="statItem"><span className="statNumber">3,467,998</span><span className="statLabel">People*</span></div>
                        <div className="statItem"><span className="statNumber">5,906,093</span><span className="statLabel">Images</span></div>
                        <div className="statItem"><span className="statNumber">530,938</span><span className="statLabel">Edits Last Week</span></div>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default About;
