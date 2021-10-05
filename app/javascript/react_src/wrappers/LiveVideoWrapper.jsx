import React from "react"
import LivePlayer from "../components/LivePlayer";
import NFTClipButton from "../components/NFTClipButton";

function LiveVideoWrapper() {
    return (
        <>
            <div style={{
                backgroundColor: "white",
                width: "100%",
                maxWidth: "700px",
            }}>
                <LivePlayer/>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px"}}>
                    <NFTClipButton/>
                </div>
            </div>
        </>
    )
}

export default LiveVideoWrapper