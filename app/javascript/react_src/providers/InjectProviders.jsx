import React from "react"
import {EventInfoProvider} from "./EventInfoProvider";
import {EthContextProvider} from "./EthContextProvider";
import {ClipContextProvider} from "./ClipContextProvider";
import {NFTContextProvider} from "./NFTContextProvider";

function InjectProviders(props) {
    return (
        <>
            <EventInfoProvider>
                <EthContextProvider>
                    <ClipContextProvider>
                        <NFTContextProvider>
                            {props.children}
                        </NFTContextProvider>
                    </ClipContextProvider>
                </EthContextProvider>
            </EventInfoProvider>
        </>
    )
}

export default InjectProviders