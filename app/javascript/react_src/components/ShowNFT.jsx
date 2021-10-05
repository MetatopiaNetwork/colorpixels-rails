import React, {useContext} from "react"
import {NFTContext} from "../providers/NFTContextProvider";
import {get721LazyNFTUrl} from "../rarible/raribleUtils";
import {Button} from "react-bootstrap";

function ShowNFT() {
	const {tokenId} = useContext(NFTContext)
    return (
        <>
            {tokenId != null &&
                <div>
                    <div style={{ marginTop: "10px"}}>
                        <h2>NFT Ready</h2>
                    </div>
                    <div>
                        <Button
                            onClick={() => {
                                window.open(get721LazyNFTUrl(tokenId), '_blank').focus();
                            }}
                        >
                            See&nbsp;NFT
                        </Button>
                    </div>
                </div>
            }
        </>
    )
}

export default ShowNFT