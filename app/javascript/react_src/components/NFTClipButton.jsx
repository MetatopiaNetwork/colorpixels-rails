import React, {useContext} from "react"
import API from "../utils/API";
import {getLiveId} from "../bridge";
import {Button} from "react-bootstrap";
import {ClipContext} from "../providers/ClipContextProvider";

function NFTClipButton() {
    const { clipMoment } = useContext(ClipContext)

    return (
        <>
            <Button
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