import React, {useEffect, useState} from "react"
import {Button} from "react-bootstrap";
import API from "../utils/API";
import {getLiveId} from "../bridge";

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
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h4>Clip#{clip.id}</h4>
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