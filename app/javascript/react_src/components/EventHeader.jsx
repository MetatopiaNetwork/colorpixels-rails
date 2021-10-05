import React, {useContext} from "react"
import {getLiveId} from "../bridge";
import {EventInfoContext} from "../providers/EventInfoProvider";

function EventHeader() {
    const { eventName } = useContext(EventInfoContext)
    return (
        <>
            <h1 style={{marginBottom: "0px"}}>
                <i>{eventName}</i> Live Stream
            </h1>
            <div style={{
                color: "grey",
                fontSize: "13px",
                marginBottom: "20px"
            }}>Live id: <i>{getLiveId()}</i></div>
        </>
    )
}

export default EventHeader