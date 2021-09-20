import React from "react"
import {getLiveId} from "../bridge";
import 'shaka-player/dist/controls.css';
import VideoJSPlayer from "../components/players/VideoJSPlayer";

function WatchPage() {

    return (
        <>
            <h1 style={{marginBottom: "0px"}}>
                <i>EventName</i> Live Stream
            </h1>
            <div style={{
                color: "grey",
                fontSize: "13px",
                marginBottom: "20px"
            }}>Live id: <i>{getLiveId()}</i></div>
            <div style={{
                backgroundColor: "white",
                width: "100%",
                maxWidth: "700px",
            }}>
                <VideoJSPlayer src="https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8"/>
            </div>


        </>
    )
}

export default WatchPage