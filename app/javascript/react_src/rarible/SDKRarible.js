import {getWeb3} from "../web3";
import {createRaribleSdk} from "@rarible/protocol-ethereum-sdk";

let raribleSDKinstance = null

// env: 'ropsten' | 'rinkeby' | 'mainnet' | 'e2e'
function getRariableSDK(env = SELECTED_NETWORK.env) {
    if (!!raribleSDKinstance)
        return raribleSDKinstance

    const web3 = getWeb3()

    raribleSDKinstance = createRaribleSdk(web3, env, {fetchApi: fetch})
    return raribleSDKinstance
}

async function SDKLazyMint721(creatorAddress, uri, value = 10000, contractAddress) {
    const raribleSDK = getRariableSDK()
    const tokenId = await raribleSDK.nft.mint({
        collection: {
            id: contractAddress,
            type: "ERC721",
            supportsLazyMint: true,
            features: {},
        },
        features: {},
        uri: uri,
        creators: [{account: creatorAddress, value: value}],
        royalties: [],
        lazy: true,
    })

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