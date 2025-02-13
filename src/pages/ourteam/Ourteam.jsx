import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import teamMembers from "./teamMembers.json"; // Import the JSON data

const OurTeam = () => {
    return (
        <div className="ourTeamPage" style={{ minHeight: "60vh" }}>
            <ContentWrapper>
                <h1 className="teamTitle">Our Team</h1>
                <div className="teamContainer">
                    {teamMembers.map((member) => (
                        <div className="teamCard" key={member.id}>
                            <div className="teamPhoto">
                                <img src={member.photo} alt={member.name} />
                            </div>
                            <div className="teamDetails">
                                <h2 className="teamName">{member.name}</h2>
                                <p className="teamDesignation">{member.designation}</p>
                                <p className="teamDescription">{member.description}</p>
                                <a
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="linkedinButton"
                                >
                                    LinkedIn Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </ContentWrapper>
        </div>
    );
};

export default OurTeam;