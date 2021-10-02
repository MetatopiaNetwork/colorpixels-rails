import React, {useState} from "react"
import {getLiveId} from "../bridge";
import 'shaka-player/dist/controls.css';
import VideoJSPlayer from "../components/players/VideoJSPlayer";
import {Dropdown, Button} from 'react-bootstrap';
import API from "../utils/API";
import Web3N from "web3";

function WatchPage() {

    const [clipId, setClipId] = useState(null)
    const [clipInfo, setClipInfo] = useState(null)
    const [lazyTokenId, setLazyTokenId] = useState(null)

    return (
        <>
            <h1 style={{marginBottom: "0px"}}>
                <i>EventName</i> Live Stream
            </h1>
            <div style={{
                color: "grey",
                fontSize: "13px",
                marginBottom: "20px"
            }}>Live id: <i>{getLiveId()}</i></div>
            <div style={{
                backgroundColor: "white",
                width: "100%",
                maxWidth: "700px",
            }}>
                <VideoJSPlayer src="https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8"/>

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
                    <div>
                        <Button
                            onClick={async () => {
                                // const tokenId = await lazyMint721("0xB4D6B7757d88BA7EBCB6663E91E98FA352C53E12", clipInfo.service_url)
                                // console.log(tokenId)
                                // setLazyTokenId(tokenId)
                                window.ethereum.request({
                                    method: "eth_requestAccounts"
                                })

                                const web3 = new Web3N(window.ethereum);
                            }}
                        >
                            LazyMint
                        </Button>
                    </div>
                    <div>
                        Lazy Token Id: {lazyTokenId}
                    </div>
                </>
                }
            </div>}


        </>
    )
}

export default WatchPage