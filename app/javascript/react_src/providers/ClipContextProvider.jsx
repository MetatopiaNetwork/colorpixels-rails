import React, {createContext, useContext, useState} from "react"
import {getWeb3} from "../web3";
import API from "../utils/API";
import {getLiveId} from "../bridge";
import {EventInfoContext} from "./EventInfoProvider";

const ClipContext = createContext(null);

function ClipContextProvider(props) {
    const {streamUrl} = useContext(EventInfoContext)
    const [clipUrl, setClipUrl] = useState(null)
    const [clipId, setClipId] = useState(null)

    async function clipMoment(seconds) {
        try {
            let response = await API.post('clip', {
                live_id: getLiveId(),
                stream_url: streamUrl,
            });
            setClipId(response.data.id)
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <ClipContext.Provider
                value={{
                    clipUrl,
                    clipMoment
                }}
            >
                {props.children}
            </ClipContext.Provider>
        </>
    )
}

export {ClipContextProvider, ClipContext}