import React, {createContext, useState} from "react"
import {getWeb3} from "../web3";

const EthContext = createContext(null);

function EthContextProvider(props) {
    const [ethConnected, setEthConnected] = useState(false)
    const [ethAccount, setEthAccount] = useState(null)

    async function connectEthAccount() {
        const web3 = getWeb3();
        const web3Accounts = await web3.eth.getAccounts();
        const selectedWeb3Account = web3Accounts[0];
        setEthAccount(selectedWeb3Account)
        setEthConnected(true)
    }

    connectEthAccount()

    return (
        <>
            <EthContext.Provider
                value={{
                    ethConnected,
                    ethAccount,
                    connectEthAccount
                }}
            >
                {props.children}
            </EthContext.Provider>
        </>
    )
}

export {EthContextProvider, EthContext}