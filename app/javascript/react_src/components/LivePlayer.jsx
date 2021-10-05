import React from "react"
import VideoJSPlayer from "./players/VideoJSPlayer";

function LivePlayer() {
    return (
        <>
            <VideoJSPlayer src="https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8"/>
        </>
    )
}

export default LivePlayer