import React from "react"
import VideoPlayer from 'react-video-js-player';
import "./video-js.css"


function VideoJSPlayer(props) {

    let thePlayer = undefined

    function onPlayerReady(player) {
        console.log("Player is ready: ", player);
        thePlayer = player

    }

    function onVideoTimeUpdate(duration) {
        console.log("Time updated: ", duration);
    }

    return (
        <div>
            <VideoPlayer
                className="video-js-player-wrap"
                controls={true}
                autoplay={true}
                hideControls={['playbackrates']}
                // onReady={onPlayerReady}
                // onTimeUpdate={onVideoTimeUpdate}
                src={props.src}
            />
        </div>
    );

}

export default VideoJSPlayer