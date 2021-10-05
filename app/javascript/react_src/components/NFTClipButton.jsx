import React, {useContext} from "react"
import {Button} from "react-bootstrap";
import {ClipContext, CLIP_STATE_PROCESSING} from "../providers/ClipContextProvider";

function NFTClipButton() {
    const {clipMoment, clipProcessingState} = useContext(ClipContext)

    return (
        <>
            <Button
                disabled={clipProcessingState == CLIP_STATE_PROCESSING}
                onClick={async () => {
                    await clipMoment(5)
                }}
            >
                NFT Clip what just happened
            </Button>
        </>
    )
}

export default NFTClipButton