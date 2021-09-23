import React from "react"
import {getLiveId} from "../bridge";
import 'shaka-player/dist/controls.css';
import VideoJSPlayer from "../components/players/VideoJSPlayer";
import {Dropdown, Button} from 'react-bootstrap';
import API from "../utils/API";


function WatchPage() {

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
                        onClick={() => {
                            API.post('clip', {
                                live_id: getLiveId(),
                                stream_url: "https://cdn.livepeer.com/hls/274ecn88f1pocum0/index.m3u8",
                            });
                        }}
                    >
                        NFT Clip
                    </Button>
                    <div className="dropdown" style={{ display: "none", marginLeft: "10px"}}>
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


        </>
    )
}

export default WatchPage