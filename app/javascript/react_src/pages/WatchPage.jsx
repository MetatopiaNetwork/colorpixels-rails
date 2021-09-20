import React from "react"
import {getLiveId} from "../bridge";
import VideoPlayer from "../components/VideoPlayer";

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
                backgroundColor: "black",
                width: "100%",
                maxWidth: "700px",
                height: "400px",
                borderRadius: "8px",
            }}>
                <VideoPlayer src="https://cdn.livepeer.com/hls/4c0dydkzyw3noeem/index.m3u8"/>
            </div>



        </>
    )
}

export default WatchPage