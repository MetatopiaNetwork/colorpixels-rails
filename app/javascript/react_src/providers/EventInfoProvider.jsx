import React, {createContext} from "react"
import {EthContext} from "./EthContextProvider";

const EventInfoContext = createContext(null);

function EventInfoProvider(props) {
    const eventName = "Event Name 1"
    const streamUrl = "https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8"

    return (
        <>
            <EventInfoContext.Provider
                value={{
                    eventName,
                    streamUrl
                }}
            >
                {props.children}
            </EventInfoContext.Provider>
        </>
    )
}

export {EventInfoProvider, EventInfoContext}