import React from "react"
import {EventInfoProvider} from "./EventInfoProvider";
import {EthContextProvider} from "./EthContextProvider";
import {ClipContextProvider} from "./ClipContextProvider";

function InjectProviders(props) {
    return (
        <>
			<EventInfoProvider>
				<EthContextProvider>
					<ClipContextProvider>
						{props.children}
                    </ClipContextProvider>
                </EthContextProvider>
            </EventInfoProvider>
        </>
    )
}

export default InjectProviders