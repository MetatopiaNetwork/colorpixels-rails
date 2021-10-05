import Web3 from "web3";

let web3instance = null

function getWeb3() {
    if (web3instance != null)
        return web3instance
    window.ethereum.request({
        method: "eth_requestAccounts"
    })

    web3instance = new Web3(window.ethereum);
    return web3instance
}


export {getWeb3};