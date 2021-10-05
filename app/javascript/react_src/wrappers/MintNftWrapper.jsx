import React, {useContext} from "react"
import {CLIP_STATE_READY, ClipContext} from "../providers/ClipContextProvider";
import ClipToNFTButton from "../components/ClipToNFTButton";
import ShowNFT from "../components/ShowNFT";
import {Button} from "react-bootstrap";

function MintNftWrapper() {
    const {clipProcessingState, clipInfo} = useContext(ClipContext)

    return (
        <>
            {clipProcessingState == CLIP_STATE_READY &&
            <div style={{
                backgroundColor: "white",
                width: "100%",
                maxWidth: "700px",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <div style={{flexGrow: 2}}>
                        <video style={{width: "100%"}} controls>
                            <source src={clipInfo?.service_url} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div style={{marginLeft: "10px"}}>
                        <div>
                            <ClipToNFTButton/>
                        </div>
                        <div>
                            <Button
                                style={{marginTop: "10px"}}
                                onClick={() => {
                                    window.location.href = clipInfo?.service_url
                                }}
                            >
                                Download&nbsp;mp4
                            </Button>
                        </div>
                        <div>
                            <ShowNFT/>
                        </div>
                    </div>
                </div>

            </div>}
        </>
    )
}

export default MintNftWrapper