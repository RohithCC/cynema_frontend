import React from "react";
import "./style.scss";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import teamMembers from "./teamMembers.json"; // Import the JSON data
import { AiFillThunderbolt } from "react-icons/ai"; // Assuming you want icons as well

const OurTeam = () => {
    const founder = {
        name: "John Doe",
        photo: "path_to_founder_photo.jpg", // Replace with the actual image path
        designation: "Founder & CEO",
        description:
            "I envision our platform as a dynamic hub where artists and clients connect worldwide, offering artists a stage to showcase their talents while empowering them to thrive professionally through their passion. Through cutting-edge technology, we streamline the booking process, ensuring efficiency and fairness for all, fostering a thriving global artistic community.",
        linkedin: "https://www.linkedin.com/in/johndoe", // Replace with founder's actual LinkedIn
    };

    return (
        <div className="ourTeamPage" style={{ minHeight: "60vh" }}>
            <ContentWrapper>
                {/* Meet Our Founder Section */}
                <section className="founderSection">
                    <div className="founderDetails">
                        <div className="founderPhoto">
                            <img src={founder.photo} alt={founder.name} />
                        </div>
                        <div className="founderInfo">
                            <h1 className="founderName">{founder.name}</h1>
                            <p className="founderDesignation">{founder.designation}</p>
                            <p className="founderDescription">{founder.description}</p>
                            <a
                                href={founder.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkedinButton"
                            >
                                View LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </section>

                {/* Our Team Section */}
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
