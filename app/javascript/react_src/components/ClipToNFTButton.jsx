import React, {useContext, useState} from "react"
import {Button} from "react-bootstrap";
import {NFTContext} from "../providers/NFTContextProvider";

function ClipToNFTButton() {
    const {clipToNFT} = useContext(NFTContext)
    const [disabled, setDisabled] = useState(false)
    return (
        <>
            <Button
                disabled={disabled}
                onClick={async () => {
                    setDisabled(true)
                    await clipToNFT()
                    setDisabled(false)
                }}
            >
                Mint into NFT
            </Button>
        </>
    )
}

export default ClipToNFTButton