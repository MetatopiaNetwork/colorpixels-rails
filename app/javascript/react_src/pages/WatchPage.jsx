import React from "react"
import {getLiveId} from "../bridge";

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
                width: "700px",
                height: "400px",
                borderRadius: "8px",
            }}>

            </div>


        </>
    )
}

export default WatchPage