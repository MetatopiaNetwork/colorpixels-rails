import React, {useContext} from "react"
import {EthContext} from "../EthContextProvider";
import {Button} from "react-bootstrap";

// display the ETH account if exists. Ask to connect account otherwise
function AccountDisplay() {
    const {
        ethConnected,
        ethAccount,
        connectEthAccount,
    } = useContext(EthContext)

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