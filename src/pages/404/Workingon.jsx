import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const Workingon = () => {
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">Please wait ..</span>
                <span className="smallText">We are working on it</span>
            </ContentWrapper>
        </div>
    );
};

export default Workingon;
