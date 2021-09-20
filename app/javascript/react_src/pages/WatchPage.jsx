import React from "react"
import {getLiveId} from "../bridge";

function WatchPage() {

    return (
        <>
            <h1 style={{marginBottom: "0px"}}>
                <i>EventName</i> Live Stream
            </h1>
            <div>Live id: {getLiveId()}</div>


        </>
    )
}

export default WatchPage