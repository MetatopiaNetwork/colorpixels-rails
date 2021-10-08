import React, {useContext} from "react"
import LivePlayer from "../components/LivePlayer";
import ClipButton from "../components/ClipButton";
import ClipProcessingStatus from "../components/ClipProcessingStatus";
import {CLIP_STATE_READY, ClipContext} from "../providers/ClipContextProvider";
import {EthContext} from "../providers/EthContextProvider";

function LiveVideoWrapper() {
    const {clipProcessingState} = useContext(ClipContext)
    const {ethConnected} = useContext(EthContext)

    return (
        <>
            <div style={{
                width: "100%",
                maxWidth: "700px",
            }}>
                <LivePlayer/>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginTop: "20px",
                    marginBottom: "20px"
                }}>
                    {clipProcessingState != CLIP_STATE_READY && ethConnected && <ClipButton/>}
                </div>
                <ClipProcessingStatus/>
            </div>
        </>
    )
}

export default LiveVideoWrapper