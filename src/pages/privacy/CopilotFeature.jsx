'use client';
import React, { useState } from 'react';
import HoverCard from './HoverCard';
import { motion } from "framer-motion";
import './style1.scss';  // Import the external SCSS file

const CopilotFeature = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <HoverCard backgroundColor="#FF7F50" direction='left' left='0'>
            <div className="copilot-feature-container">
                <div className="copilot-feature-content">
                    <p className="description" id = "avenger">
                        <span className="highlight">Linzz is</span> The Avengers of Art:

                        The epic journey of our Marvel-ous Artist Booking revolution
                    </p>
                    <div>
                        <a
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                            href="#"
                            className='action-link'
                            id = "avenger"
                        >
                            Meet More Linzz Events
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`icon ${hovered ? "translate-x-0" : "-translate-x-1"}`}
                                width="20"
                                height="20"
                                viewBox="0 0 16 16"
                                fill="none"
                            >
                                <path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z" />
                                <path
                                    className={`transition-opacity ease-in duration-150 ${hovered ? "opacity-100" : "opacity-0"}`}
                                    stroke="currentColor"
                                    d="M1.75 8H11"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <div className={`underline ${hovered ? "w-11/12 scale-100" : "w-0 scale-0"}`} />
                        </a>
                    </div>
                </div>
                <div className="card-container">
                    <motion.div 
                        className='card'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className='card-content' id = "avenger">
                            <h2>Enhance Your outcomes</h2>
                            <p>Explore the chapters of our extraordinary journey, where dreams met stardom and events became legendary stories.!</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </HoverCard>
    );
};

export default CopilotFeature;
