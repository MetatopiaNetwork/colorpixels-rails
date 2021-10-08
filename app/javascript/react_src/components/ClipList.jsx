import React, {useEffect, useState} from "react"
import {Button} from "react-bootstrap";
import API from "../utils/API";
import {getLiveId} from "../bridge";
import VideoJSPlayer from "./players/VideoJSPlayer";

function ClipList() {
    const [clips, setClips] = useState([])
    const [initLoad, setInitLoad] = useState(false)

    useEffect(() => {
        if (initLoad == false) {
            refreshClips()
            setInitLoad(true)
        }
    })

    async function refreshClips() {
        const res = await API.get(`event/clips/${getLiveId()}`)
        console.log(res.data)
        setClips(res.data)
    }

    var clipRows = [];
    for (var i = 0; i < clips.length; i++) {
        const clip = clips[i]
        const element = <div key={"clip-" + i}>
            {i == 0 && <br/>}
            {i != 0 && <hr/>}
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h4>Clip#{clip.id}</h4>

                {clip?.rarible_url != "" &&
                <div>
                    <a href={clip.rarible_url} target="_blank">See on Rarible</a>
                </div>}
            </div>
            {clip.relative_url != null && <div>
                <VideoJSPlayer src={clip.relative_url} autoplay={false} width={200} height={150} />
            </div>}
            {clip.minter_eth_addr != null &&
            <div>
                minter: {clip.minter_eth_addr}
            </div>}
            <div>
                <a href={clip.service_url}>Download</a>
            </div>
        </div>

        clipRows.push(element);
    }


    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h2>Clips</h2>
                <Button onClick={refreshClips}>Refresh Clips</Button>
            </div>
            <div>
                {clipRows}
            </div>
        </>
    )
}

export default ClipList