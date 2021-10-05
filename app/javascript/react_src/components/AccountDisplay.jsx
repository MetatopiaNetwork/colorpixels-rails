import React, {useContext} from "react"
import {GlobalContext} from "../GlobalContextProvider";
import {Button} from "react-bootstrap";

// display the ETH account if exists. Ask to connect account otherwise
function AccountDisplay() {
    const {
        ethConnected,
        ethAccount,
        connectEthAccount,
    } = useContext(GlobalContext)

    return (
        <>
            {!ethConnected && <>
                <div>
                    <Button

                        onClick={() => {connectEthAccount()}}
                    >
                        Connect Ethereum Account
                    </Button>
                </div>
            </>}
            {ethConnected && <>
                <div>You're connected with {ethAccount}</div>
            </>}
        </>
    )
}

export default AccountDisplay