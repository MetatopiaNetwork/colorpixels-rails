import {getWeb3} from "../web3";
import {getHttpClient} from "../httpClient";
import {DEFAULT_SELECTED_NETWORK} from "./networks";

async function customLazyMint721(creatorAddress, uri, value = 10000, selectedNetwork = DEFAULT_SELECTED_NETWORK) {
    const baseEndpoint = selectedNetwork.api_endpoint
    const contractAddress = selectedNetwork.ERC721_contract
    const client = getHttpClient(baseEndpoint)
    const path = `/protocol/v0.1/ethereum/nft/collections/${contractAddress}/generate_token_id?minter=${creatorAddress}`
    const res = await client.get(path)
    console.log(res.data)
    const tokenID = res.data.tokenId
    const r = res.data.signature.r
    const s = res.data.signature.s
    const v = res.data.signature.v

    console.log("tokenID ", tokenID, " r ", r, " s ", s, " v ", v)
}

export {customLazyMint721 }