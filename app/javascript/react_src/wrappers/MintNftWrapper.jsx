import React, {useContext, useState} from "react"
import {CLIP_STATE_READY, ClipContext} from "../providers/ClipContextProvider";
import ClipToNFTButton from "../components/ClipToNFTButton";
import ShowNFT from "../components/ShowNFT";
import {Button, Spinner} from "react-bootstrap";
import VideoJSPlayer from "../components/players/VideoJSPlayer";
import {delay} from "../utils/toolbox";

function MintNftWrapper() {
    const {clipProcessingState, clipInfo} = useContext(ClipContext)

    const [displayVid, setDisplayVid] = useState(true)

    async function reloadVid(e) {
        e.preventDefault()
        setDisplayVid(false)
        await delay(3)
        setDisplayVid(true)
    }

    return (
        <>
            {clipProcessingState == CLIP_STATE_READY &&
            <div style={{
                width: "100%",
                maxWidth: "700px",
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <div style={{flexGrow: 2}}>
                        {displayVid && <VideoJSPlayer src={clipInfo?.relative_url} autoplay={false} />}
                        {!displayVid && <Spinner animation="grow" variant="primary"/>}
                        <div>
                            <a href={''} onClick={reloadVid}>Fetch Clip</a>
                        </div>
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