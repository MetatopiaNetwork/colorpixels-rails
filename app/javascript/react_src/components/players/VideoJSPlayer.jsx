import React from "react"
import VideoPlayer from 'react-video-js-player';
import "./video-js.css"


function VideoJSPlayer(props) {
    let autoplay = true
    if (props?.autoplay != null) {
        autoplay = props.autoplay
    }

    let width = "auto"
    if (props?.width != null) {
        width = props.width
    }

    let height = "auto"
    if (props?.height != null) {
        height = props.height
    }

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
                width={width}
                height={height}
                className="video-js-player-wrap"
                controls={true}
                autoplay={autoplay}
                hideControls={['playbackrates']}
                // onReady={onPlayerReady}
                // onTimeUpdate={onVideoTimeUpdate}
                src={props.src}
            />
        </div>
    );

}

export default VideoJSPlayer