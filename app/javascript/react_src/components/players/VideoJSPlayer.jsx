import React from "react"
import VideoPlayer from 'react-video-js-player';
import "./video-js.css"

function VideoJSPlayer(props) {

    return (
        <div>
            <VideoPlayer
                className="video-js-player-wrap"
                controls={true}
                autoplay={true}
                src={props.src}
            />
        </div>
    );

}

export default VideoJSPlayer