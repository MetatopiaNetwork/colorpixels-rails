import {createRaribleSdk} from "@rarible/protocol-ethereum-sdk"
import {getWeb3} from "./web3";
import {toAddress} from "@rarible/types";

const MAINNET_INFO = {
    // api_endpoint: "ethereum-api.rarible.org",
    api_endpoint: "api-dev.rarible.com",
    chain_id: 1,
    env: 'mainnet',
    ERC721_contract: "0xF6793dA657495ffeFF9Ee6350824910Abc21356C",
    ERC1155_contract: "0xB66a603f4cFe17e3D27B87a8BfCaD319856518B8",
}

const RINKEBY_INFO = {
    // api_endpoint: "ethereum-api-staging.rarible.org",
    api_endpoint: "api-dev.rarible.com",
    chain_id: 4,
    env: 'rinkeby',
    ERC721_contract: "0x6ede7f3c26975aad32a475e1021d8f6f39c89d82",
    ERC1155_contract: "0x1AF7A7555263F275433c6Bb0b8FdCD231F89B1D7",
}

const ROPSTEN_INFO = {
    // api_endpoint: "ethereum-api-dev.rarible.org",
    api_endpoint: "api-dev.rarible.com",
    chain_id: 3,
    env: 'ropsten',
    ERC721_contract: "0xB0EA149212Eb707a1E5FC1D2d3fD318a8d94cf05",
    ERC1155_contract: "0x6a94aC200342AC823F909F142a65232E2f052183",
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

async function lazyMint1155(creatorAddress, uri, value = 10000, contractAddress = SELECTED_NETWORK.ERC1155_contract) {
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

async function customLazyMint721(creatorAddress, uri, value = 10000, selectedNetwork = SELECTED_NETWORK) {
    const baseEndpoint = selectedNetwork.api_endpoint
    const contractAddress = selectedNetwork.ERC721_contract
    const url = `https://${baseEndpoint}/protocol/v0.1/ethereum/nft/collections/${contractAddress}/generate_token_id?minter=${creatorAddress}`
    console.log(url)
    const res = await fetch(url)
    console.log(res.json())
}

export {getRariableSDK, lazyMint721, lazyMint1155, customLazyMint721, SELECTED_NETWORK}