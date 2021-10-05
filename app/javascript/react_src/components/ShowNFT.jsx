import React, {useContext} from "react"
import {NFTContext} from "../providers/NFTContextProvider";
import {get721LazyNFTUrl} from "../rarible/raribleUtils";

function ShowNFT() {
	const {tokenId} = useContext(NFTContext)
    return (
        <>
            {tokenId != null &&
                <div>
                    <div>
                        <h2>NFT</h2>
                    </div>
                    <div>
                        <a href={get721LazyNFTUrl(tokenId)}>See NFT on Rarible</a>
                    </div>
                </div>
            }
        </>
    )
}

export default ShowNFT