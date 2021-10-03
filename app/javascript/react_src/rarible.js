import {createRaribleSdk} from "@rarible/protocol-ethereum-sdk"
import {getWeb3} from "./web3";
import {toAddress} from "@rarible/types";

const MAINNET_INFO = {
    api_endpoint: "https://ethereum-api.rarible.org/",
    chain_id: 1,
    env: 'mainnet',
    ERC721_contract: "", // todo
    ERC1155_contract: "", // todo
}

const RINKEBY_INFO = {
    api_endpoint: "https://ethereum-api-staging.rarible.org/",
    chain_id: 4,
    env: 'rinkeby',
    ERC721_contract: "0x6ede7f3c26975aad32a475e1021d8f6f39c89d82",
    ERC1155_contract: "0x1AF7A7555263F275433c6Bb0b8FdCD231F89B1D7",
}

const ROPSTEN_INFO = {
    api_endpoint: "https://ethereum-api-dev.rarible.org/",
    chain_id: 3,
    env: 'ropsten',
    ERC721_contract: "", // todo
    ERC1155_contract: "", // todo
}

const SELECTED_NETWORK = RINKEBY_INFO


let raribleSDKinstance = null
// env: 'ropsten' | 'rinkeby' | 'mainnet' | 'e2e'
function getRariableSDK(env = SELECTED_NETWORK.env) {
    if (!!raribleSDKinstance)
        return raribleSDKinstance

    const web3 = getWeb3()

    raribleSDKinstance = createRaribleSdk(web3, env, {fetchApi: fetch})
    return raribleSDKinstance
}

async function lazyMint721(creatorAddress, uri, value = 10000, contractAddress = SELECTED_NETWORK.ERC721_contract) {
    const raribleSDK = getRariableSDK()
    const tokenId = await raribleSDK.nft.mint({
        collection: {
            id: contractAddress,
            type: "ERC721",
            supportsLazyMint: true,
        },
        uri: uri,
        creators: [{account: creatorAddress, value: value}],
        royalties: [],
        lazy: true,
    })
    return tokenId
}

export {getRariableSDK, lazyMint721, SELECTED_NETWORK}