import React from "react"
import 'shaka-player/dist/controls.css';
import AccountDisplay from "../components/AccountDisplay";
import EventHeader from "../components/EventHeader";
import LiveVideoWrapper from "../wrappers/LiveVideoWrapper";
import MintNftWrapper from "../wrappers/MintNftWrapper";

function WatchPage() {

    return (
        <>
            <EventHeader/>
            <AccountDisplay/>
            <LiveVideoWrapper/>
            <MintNftWrapper/>
        </>
    )
}

export default WatchPage