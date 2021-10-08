import React, {createContext, useEffect, useState} from "react"
import {Spinner} from "react-bootstrap";
import API from "../utils/API";
import {getLiveId} from "../bridge";

const EventInfoContext = createContext(null);

function EventInfoProvider(props) {
    const [loading, setLoading] = useState(true)
    const [eventName, setEventName] = useState( "Error getting event")
    const [streamUrl, setStreamUrl] = useState("https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8")

    useEffect(async () => {
        if (loading) {
            try {
                const liveId = getLiveId()
                const res = await API.get("/event/" + liveId)
                setStreamUrl(res.data.stream_url)
                setEventName(res.data.name)
            } finally {
                setLoading(false)
            }
        }
    })

    return (
        <>
            {loading &&
            <>
                <div style={{textAlign: "center", marginTop: "150px"}}>
                    <p>Loading event...</p>
                    <Spinner animation="border" variant="dark"/>
                    <Spinner animation="grow" variant="primary"/>
                </div>
            </>
            }
            {!loading &&
            <EventInfoContext.Provider
                value={{
                    eventName,
                    streamUrl
                }}
            >
                {props.children}
            </EventInfoContext.Provider>}
        </>
    )
}

export {EventInfoProvider, EventInfoContext}