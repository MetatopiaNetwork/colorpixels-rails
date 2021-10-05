import React, {useContext} from "react"
import {Alert} from "react-bootstrap";
import {
    CLIP_STATE_FAILED,
    CLIP_STATE_PROCESSING,
    CLIP_STATE_READY,
    ClipContext
} from "../providers/ClipContextProvider";

function ClipProcessingStatus() {
    const {clipId, clipProcessingState, clipInfo} = useContext(ClipContext)

    return (
        <>
            {clipProcessingState == CLIP_STATE_PROCESSING &&
            <Alert variant="primary">
                Clip#{clipId} is processing
            </Alert>}
            {clipProcessingState == CLIP_STATE_FAILED &&
            <Alert variant="danger">
                Clip#{clipId} processing failed
            </Alert>}
            {clipProcessingState == CLIP_STATE_READY &&
            <Alert variant="success">
                Clip#{clipId} is ready. <a href={clipInfo.service_url}>View</a>
            </Alert>}
        </>
    )
}

export default ClipProcessingStatus