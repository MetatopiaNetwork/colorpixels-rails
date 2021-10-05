import React, {useContext} from "react"
import {CLIP_STATE_READY, ClipContext} from "../providers/ClipContextProvider";
import ClipToNFTButton from "../components/ClipToNFTButton";

function MintNftWrapper() {
    const {clipId, clipProcessingState, clipInfo} = useContext(ClipContext)

    return (
        <>
            {clipProcessingState == CLIP_STATE_READY &&
            <div>
                <div>
                    <a href={clipInfo?.service_url}>Download Clip</a>
                </div>
                <div>
                    <ClipToNFTButton/>
                </div>
            </div>}
        </>
    )
}

export default MintNftWrapper