import React, {useContext, useEffect, useState} from "react"
import {getLiveId} from "../bridge";
import 'shaka-player/dist/controls.css';
import VideoJSPlayer from "../components/players/VideoJSPlayer";
import {Button, Dropdown} from 'react-bootstrap';
import API from "../utils/API";
import {getWeb3} from "../web3";
import {SDKLazyMint721} from "../rarible/SDKRarible";
import {get721LazyNFTUrl} from "../rarible/raribleUtils"
import {EthContext} from "../EthContextProvider";
import AccountDisplay from "../components/AccountDisplay";
import EventHeader from "../components/EventHeader";

function WatchPage() {

    const {ethAccount} = useContext(EthContext)
    const [clipId, setClipId] = useState(null)
    const [clipInfo, setClipInfo] = useState(null)
    const [lazyTokenId, setLazyTokenId] = useState(null)


    return (
        <>
            <EventHeader/>
            <div style={{
                backgroundColor: "white",
                width: "100%",
                maxWidth: "700px",
            }}>
                <VideoJSPlayer src="https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8"/>

                <AccountDisplay/>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "20px"}}>
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
                    <div className="dropdown" style={{display: "none", marginLeft: "10px"}}>
                        <Dropdown>
                            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                Quick NFT Clip
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="">Last 10 seconds</Dropdown.Item>
                                <Dropdown.Item href="">Last 20 seconds</Dropdown.Item>
                                <Dropdown.Item href="">Last 30 seconds</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>

                </div>
            </div>
            <div>
                <div>ETH Account: {ethAccount} </div>
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
                        try {
                            let response = await API.get('clip/' + clipId);
                            setClipInfo(response.data)
                        } catch (e) {
                            console.log(e)
                        }
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