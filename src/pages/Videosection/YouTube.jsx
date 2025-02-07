import React from 'react';
import './YouTube.scss'; // Optional: Add any custom styling if needed

const YouTube = ({ videoId }) => {
    return (
        <div className="youtubeEmbed">
            <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default YouTube;
