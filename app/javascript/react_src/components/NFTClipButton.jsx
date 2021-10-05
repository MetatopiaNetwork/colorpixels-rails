import React from "react"
import API from "../utils/API";
import {getLiveId} from "../bridge";
import {Button} from "react-bootstrap";

function NFTClipButton() {
    return (
        <>
            <Button
                onClick={async () => {
                    try {
                        let response = await API.post('clip', {
                            live_id: getLiveId(),
                            stream_url: "https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8",
                        });
                        setClipId(response.data.id)
                    } catch (e) {
                        console.log(e)
                    }

                }}
            >
                NFT Clip what just happened
            </Button>
        </>
    )
}

export default NFTClipButton