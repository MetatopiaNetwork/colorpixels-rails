import React, {createContext, useState} from "react"
import {getWeb3} from "./web3";

const GlobalContext = createContext(null);

function GlobalContextProvider(props) {
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
            <GlobalContext.Provider
                value={{
                    ethConnected,
                    ethAccount,
                    connectEthAccount
                }}
            >
                {props.children}
            </GlobalContext.Provider>
        </>
    )
}

export {GlobalContextProvider, GlobalContext}