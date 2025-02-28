import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import dayjs from "dayjs";
import "./style1.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import PosterFallback from "../../../assets/no-poster.png";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import test from "./data.json";

const DetailsBanner1 = ({ video, crew }) => {
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    // State variables for form inputs
    const [venueCity, setVenueCity] = useState("");
    const [budget, setBudget] = useState("");
    const [attendees, setAttendees] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [eventdate, setEventdate] = useState("");
    const [eventType, setEventType] = useState("");
    const [moreInfo, setMoreInfo] = useState(""); // State variable to hold textarea value

    // Function to handle changes in textarea
    const handleMoreInfoChange = (e) => {
        setMoreInfo(e.target.value);
    };

    const { mediaType, id } = useParams();

    const { url } = useSelector((state) => state.home);

    // Find the matching data from the imported JSON and the crew
    let data = test.find((f) => f.id == id); // Directly use the imported JSON data

    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter(
        (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
    );

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    const handleClick = () => {
        if (id) {
            navigate(`/cart/checkout/${id}`);
        } else {
            console.error("ID is not defined");
        }
    };

    const handleEventTypeChange = (e) => {
        setEventType(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(
                "https://cynema-backend.onrender.com/api/celebraties",
                {
                    eventType,
                    eventDate: eventdate,
                    venueCity,
                    budget,
                    attendees,
                    fullName,
                    email,
                    mobileNumber,
                    moreInfo,
                    backdrop_path: data.backdrop_path,
                    id: data.id,
                    original_title: data.original_title,
                    overview: data.overview,
                    date_of_birth: data.date_of_birth,
                    status: data.status,
                    tagline: data.tagline,
                    title: data.title,
                    facebook_url: "",
                    insta_url: "",
                    youtube_url: "",
                    insta_name: `https://res.cloudinary.com/dlkcxiz0l/image/upload/v1720598869/linzz/${data.backdrop_path}`,
                    followers_approximate: 100,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                }
            );
            console.log("Form submitted with response:", response.data);
            alert("Your enquiry has been submitted successfully.");
            navigate(`/`);
        } catch (error) {
            console.error("Error submitting form:", error);
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
            } else if (error.request) {
                console.error("Request data:", error.request);
            } else {
                console.error("Error message:", error.message);
            }
        }
    };

    const handleDateChange = (e) => {
        setEventdate(e.target.value);
    };

    // Get today's date in the format YYYY-MM-DD
    const today = new Date().toISOString().split("T")[0];

    return (
        <div className="detailsBanner">
            {!!data && (
                <React.Fragment>
                    <div className="backdrop-img">
                        <Img
                            src={`https://res.cloudinary.com/dlkcxiz0l/image/upload/v1720598869/linzz/${data.backdrop_path}`}
                        />
                    </div>
                    <div className="opacity-layer"></div>
                    <ContentWrapper>
                        <div className="content">
                            <div className="left">
                                {data.poster_path ? (
                                    <>
                                        <Img
                                            className="posterImg"
                                            src={`https://res.cloudinary.com/dlkcxiz0l/image/upload/v1720598869/linzz/${data.poster_path}`}
                                        />
                                        <div className="postertxt">
                                            <div
                                                className="our-brand-list"
                                                id="whystarclinch2"
                                            >
                                                <div
                                                    className="title-div"
                                                    style={{
                                                        margin: "0px",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <h3
                                                        className="title-bg-heading"
                                                        style={{
                                                            color: "#e6e6e6",
                                                        }}
                                                    >
                                                        <span>
                                                            Why Linzz
                                                        </span>
                                                    </h3>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <i
                                                            className="fa fa-check-circle"
                                                            aria-hidden="true"
                                                        ></i>
                                                        <p
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            1) Reliable Booking
                                                            Partner - 10K+
                                                            bookings in the last
                                                            8 years
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i
                                                            className="fa fa-check-circle"
                                                            aria-hidden="true"
                                                        ></i>
                                                        <p
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            2) ONLY VC funded
                                                            Entertainment
                                                            startup
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i
                                                            className="fa fa-check-circle"
                                                            aria-hidden="true"
                                                        ></i>
                                                        <p
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            3) Follows ESCROW
                                                            model
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i
                                                            className="fa fa-check-circle"
                                                            aria-hidden="true"
                                                        ></i>
                                                        <p
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            4) Leverage the
                                                            TECH; hence, doesn't
                                                            overcharge
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <i
                                                            className="fa fa-check-circle"
                                                            aria-hidden="true"
                                                        ></i>
                                                        <p
                                                            style={{
                                                                textAlign:
                                                                    "left",
                                                            }}
                                                        >
                                                            5) Specialize in
                                                            CORPORATE Events
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <Img
                                        className="posterImg"
                                        src={PosterFallback}
                                    />
                                )}
                            </div>
                            <div className="right">
                                    <div className="form_title" style={{ marginTop: '0px' }}>
                                        <div className="marquee-container" style={{ padding: '10px', textAlign: 'center' }}>
                                            <h5 className="marquee-text">Get the Best Price</h5>
                                        </div>
                                    </div>
                                    <form onSubmit={handleSubmit}>

                                            <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label className="mb-1">What's the occasion?<span style={{ color: 'rgb(255, 255, 255)' }}>*</span></label>
                                                <select
                                                    className="form-control custom-select"
                                                    id="ddlModels"
                                                    name="billing_event_type"
                                                    value={eventType}
                                                    onChange={handleEventTypeChange}
                                                    required
                                                    aria-required="true"
                                                >
                                                    <option value="" disabled hidden>Select Type</option>
                                                    <option value="Virtual">Virtual</option>
                                                    <option value="Video Shoutout">Video Shoutout</option>
                                                    <option value="Campus">Campus</option>
                                                    <option value="Corporate">Corporate</option>
                                                    <option value="Private Party">Private Party</option>
                                                    <option value="Concert/Festival">Concert/Festival</option>
                                                    <option value="Wedding">Wedding</option>
                                                    <option value="Restaurant">Restaurant</option>
                                                    <option value="Professional Hiring">Professional Hiring</option>
                                                    <option value="Inauguration">Inauguration</option>
                                                    <option value="Photo/Video Shoot">Photo/Video Shoot</option>
                                                    <option value="Religious">Religious</option>
                                                    <option value="Charity">Charity</option>
                                                    <option value="Fashion Show">Fashion Show</option>
                                                    <option value="Kids Party">Kids Party</option>
                                                    <option value="Exhibition">Exhibition</option>
                                                    {/* Add other options */}
                                                </select>
                                            </div>
                                        </div>

                                            <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                <label>Event Date</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    value={eventdate}
                                                    onChange={handleDateChange}
                                                    min={today} // Setting minimum date to today
                                                    required
                                                />
                                            </div>
                                        </div>


                                            </div>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="form-group">
                                                    <label>Venue City*</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={venueCity}
                                                        onChange={(e) => setVenueCity(e.target.value)}
                                                        placeholder="Enter your Venue City"
                                                        required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 col-sm-12">
                                            <div className="form-group">
                                                        <label className="mb-1">Budget<span style={{ color: 'rgb(255, 255, 255)' }}>*</span></label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="budgetInput"
                                                            name="budget"
                                                            value={budget}
                                                            onChange={(e) => setBudget(e.target.value)}
                                                            required
                                                            aria-required="true"
                                                            placeholder="Enter Budget"
                                                        />
                                                    </div>

                                        </div>
                                        </div>

                                        <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label className="mb-1">No. of attendees<span style={{ color: 'rgb(255, 255, 255)' }}>*</span></label>
                                            <select
                                                className="form-control custom-select"
                                                id="ddlModels"
                                                name="attendees"
                                                value={attendees}
                                                onChange={(e) => setAttendees(e.target.value)}
                                                required
                                                aria-required="true"
                                            >
                                                <option value="" disabled hidden>Select Range</option>
                                                <option value="0 - 50">0 - 50</option>
                                                <option value="50 - 200">50 - 200</option>
                                                <option value="200 - 500">200 - 500</option>
                                                <option value="500 - 2000">500 - 2000</option>
                                                <option value="2000+">2000+</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Full Name*</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                    </div>
                                  
                                        
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Email Address (No Spam!)*</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your Email"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Mobile Number*</label>
                                            <div className="input-group">
                                           
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={mobileNumber}
                                                    onChange={(e) => setMobileNumber(e.target.value)}
                                                    placeholder="Mobile Number"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                 
                                        </div>

                                        <div className="row">
                                        <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Tell us more (we love to listen)</label>
                                            <textarea
                                                className="form-control"
                                                rows="3"
                                                placeholder="Tell us more"
                                                value={moreInfo}
                                                onChange={handleMoreInfoChange}
                                            ></textarea>
                                        </div>
                                    </div>
                                        </div>

                                              

                                      
                                     

                                        <div type="submit" className="genres">
                                        <button
                                         className="genre"
                                         onClick={handleClick}
                                         >
                                            <span>Request a Quote</span>
                                        </button>
                                       </div>


                                    </form>
                                   </div>
                        </div>
                    </ContentWrapper>
                    <VideoPopup
                        show={show}
                        setShow={setShow}
                        videoId={videoId}
                        setVideoId={setVideoId}
                    />
                </React.Fragment>
            )}
        </div>
    );
};

export default DetailsBanner1;
