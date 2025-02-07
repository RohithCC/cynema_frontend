import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./style1.scss";

const Genres1 = ({id}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        console.log('**')
        if (id) {
            navigate(`/cart/checkout/${id}`);
        } else {
            console.error('ID is not defined');
        }
    };

    return (
        <div className="genres">
        
                    <div
                     className="genre"
                     id="test"
                     onClick={handleClick}
                     >
                        <span>Get a Quote</span>
                    </div>

        </div>
    );
};

export default Genres1;
