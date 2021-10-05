import React, {useContext, useState} from "react"
import 'shaka-player/dist/controls.css';
import {Button} from 'react-bootstrap';
import API from "../utils/API";
import {SDKLazyMint721} from "../rarible/SDKRarible";
import {get721LazyNFTUrl} from "../rarible/raribleUtils"
import {EthContext} from "../providers/EthContextProvider";
import AccountDisplay from "../components/AccountDisplay";
import EventHeader from "../components/EventHeader";
import LiveVideoWrapper from "../wrappers/LiveVideoWrapper";
import ClipProcessingStatus from "../components/ClipProcessingStatus";

function WatchPage() {

    const {ethAccount} = useContext(EthContext)
    const [clipId, setClipId] = useState(null)
    const [clipInfo, setClipInfo] = useState(null)
    const [lazyTokenId, setLazyTokenId] = useState(null)


    return (
        <>
            <ClipProcessingStatus/>
            <EventHeader/>
            <AccountDisplay/>
            <LiveVideoWrapper/>
            <div>
                <Button
                    onClick={async () => {
                        if (ethAccount != null) {
                            const clipUrl = "https://colorpixels-dev1.sfo3.digitaloceanspaces.com/5v67iyc2f67ckho272qkmgvo4rz7"
                            // const clipUrl = "/ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp"
                            // const tokenId = await customLazyMint721(ethAccount, clipUrl)
                            const tokenId = await SDKLazyMint721(ethAccount, "0x6ede7f3c26975aad32a475e1021d8f6f39c89d82", clipUrl)
                            console.log(tokenId)
                            setLazyTokenId(tokenId)
                        } else {
                            alert("ETH Account is null")
                        }
                    }}
                >
                    Test LazyMint
                </Button>
            </div>
            <div>
                Lazy Token Id: <a href={get721LazyNFTUrl(lazyTokenId)}>{lazyTokenId}</a>
            </div>

            {!!clipId &&
            <div>
                <h3>Clip ID#{clipId}</h3>
                {!(clipInfo?.service_url) &&
                <div style={{color: "blue"}}>
                    Clip is getting processed
                </div>
                }
                <Button
                    onClick={async () => {

                    }}
                >
                    Check if clip is ready
                </Button>
                <div>
                    clip data: {JSON.stringify(clipInfo)}
                </div>

                {!!(clipInfo?.service_url) &&
                <>
                    <div style={{color: "green"}}>
                        The clip is ready! <a href={clipInfo?.service_url} target="_blank"> View it</a>
                    </div>


                </>}
            </div>}


        </>
    )
}

export default WatchPage