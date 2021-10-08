import React, {useContext} from "react"
import {Alert, Spinner} from "react-bootstrap";
import {
    CLIP_STATE_FAILED,
    CLIP_STATE_PROCESSING,
    CLIP_STATE_READY,
    ClipContext
} from "../providers/ClipContextProvider";

function ClipProcessingStatus() {
    const {clipId, clipProcessingState} = useContext(ClipContext)

    return (
        <>
            {clipProcessingState == CLIP_STATE_PROCESSING &&
            <Alert variant="primary">
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                    <div>Clip#{clipId} is processing</div>
                    <Spinner animation="grow" variant="primary"/>
                </div>
            </Alert>}
            {clipProcessingState == CLIP_STATE_FAILED &&
            <Alert variant="danger">
                Clip#{clipId} processing failed
            </Alert>}
            {clipProcessingState == CLIP_STATE_READY &&
            <Alert variant="success">
                Clip#{clipId} is ready.
            </Alert>}
        </>
    )
}

export default ClipProcessingStatus