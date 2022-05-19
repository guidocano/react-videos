import "./VideoItem.css"
import React from "react";


const VideoItem = ({videoprop, onVideoSelectprop}) => {
    return (
        <div onClick={() => onVideoSelectprop(videoprop)} className="video-item item">
            <img 
                className="ui image" 
                src={videoprop.snippet.thumbnails.medium.url} 
                alt={videoprop.snippet.title}/>
            <div className="content">
                <div className="header">{videoprop.snippet.title}</div>
            </div>
            
        </div>
    );
}

export default VideoItem;