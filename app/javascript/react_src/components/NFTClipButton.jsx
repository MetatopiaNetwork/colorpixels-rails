import React, {useContext} from "react"
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