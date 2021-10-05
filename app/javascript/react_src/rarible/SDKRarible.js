import {getWeb3} from "../web3";
import {createRaribleSdk} from "@rarible/protocol-ethereum-sdk";
import {DEFAULT_SELECTED_NETWORK} from "./networks";
import { Web3Ethereum } from "@rarible/web3-ethereum"

let raribleSDKinstance = null

// env: 'ropsten' | 'rinkeby' | 'mainnet' | 'e2e'
function getRariableSDK(env = DEFAULT_SELECTED_NETWORK.env) {
    if (!!raribleSDKinstance)
        return raribleSDKinstance

    const web3 = getWeb3()

    // raribleSDKinstance = createRaribleSdk(web3, env, {fetchApi: fetch})
    const raribleSDKinstance = createRaribleSdk(new Web3Ethereum({ web3 }), env)
    return raribleSDKinstance
}

async function SDKLazyMint721(creatorAddress, uri,  value = 10000, contractAddr = DEFAULT_SELECTED_NETWORK.ERC721_contract) {
    const raribleSDK = getRariableSDK()
    const response = await raribleSDK.nft.mint({
        collection: {
            id: contractAddr,
            type: "ERC721",
            supportsLazyMint: true,
            features: "MINT_AND_TRANSFER"
        },
        uri: uri,
        creators: [{account: creatorAddress, value: value}],
        royalties: [],
        lazy: true,
    })

    const tokenId = response.tokenId
    return tokenId
}

async function SDKLazyMint1155(creatorAddress, uri, value = 10000, contractAddress) {
    const raribleSDK = getRariableSDK()
    const tokenId = await raribleSDK.nft.mint({
        collection: {
            id: contractAddress,
            type: "ERC1155",
            supportsLazyMint: true,
        },
        features: {MINT_AND_TRANSFER: true},
        uri: uri,
        supply: 1,
        creators: [{account: creatorAddress, value: value}],
        royalties: [],
        lazy: true,
    })

    return tokenId
}

export {SDKLazyMint721, SDKLazyMint1155}