import React from "react";
import VideoItem from "./VideoItem"

const VideoList = ({videos, onVideoSelect}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem 
            key={video.id.videoId}
            onVideoSelectprop={onVideoSelect} 
            videoprop={video} 
        />
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
};

export default VideoList;
