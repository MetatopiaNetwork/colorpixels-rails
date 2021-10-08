import React, {createContext, useContext, useState} from "react"
import {getWeb3} from "../web3";
import API from "../utils/API";
import {getLiveId} from "../bridge";
import {EventInfoContext} from "./EventInfoProvider";
import {delay} from "../utils/toolbox";

const ClipContext = createContext(null);

const CLIP_STATE_NOTHING = 0
const CLIP_STATE_PROCESSING = 1
const CLIP_STATE_READY = 2
const CLIP_STATE_FAILED = 3

function ClipContextProvider(props) {
    const {streamUrl} = useContext(EventInfoContext)

    const [clipId, setClipId] = useState(null)
    const [clipInfo, setClipInfo] = useState(null)
    const [clipProcessingState, setClipProcessingState] = useState(CLIP_STATE_NOTHING)

    async function fetchClipInfo(clipId, retry) {
        if (retry <= 0) {
            setClipProcessingState(CLIP_STATE_FAILED)
            console.log("Clip processing failed")
            return
        }

        console.log("FETCH CLIP_ID=", clipId)
        let response = await API.get('clip/' + clipId);
        if (!!(response.data?.service_url)) {
            setClipInfo(response.data)
            setClipProcessingState(CLIP_STATE_READY)
            console.log("Clip processed successfully")
        } else {
            await delay(3)
            await fetchClipInfo(clipId, retry - 1)
        }
    }

    async function clipMoment(seconds) {
        try {
            let response = await API.post('clip', {
                live_id: getLiveId(),
                stream_url: streamUrl,
            });
            const resClipId = response.data.id
            setClipId(resClipId)
            setClipInfo(null)
            setClipProcessingState(CLIP_STATE_PROCESSING)
            await fetchClipInfo(resClipId, 100)
        } catch (e) {
            setClipId(null)
            setClipInfo(null)
            setClipProcessingState(CLIP_STATE_FAILED)
            console.log(e)
        }
    }

    return (
        <>
            <ClipContext.Provider
                value={{
                    clipId,
                    clipInfo,
                    clipMoment,
                    clipProcessingState,
                }}
            >
                {props.children}
            </ClipContext.Provider>
        </>
    )
}

export {ClipContextProvider, ClipContext, CLIP_STATE_NOTHING, CLIP_STATE_PROCESSING, CLIP_STATE_READY, CLIP_STATE_FAILED}