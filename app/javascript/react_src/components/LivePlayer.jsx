import React, {useContext} from "react"
import VideoJSPlayer from "./players/VideoJSPlayer";
import {EventInfoContext} from "../providers/EventInfoProvider";

function LivePlayer() {
    const {streamUrl} = useContext(EventInfoContext)
    return (
        <>
            <VideoJSPlayer src={streamUrl}/>
        </>
    )
}

export default LivePlayer