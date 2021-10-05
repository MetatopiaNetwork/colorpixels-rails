import {DEFAULT_SELECTED_NETWORK} from "./networks";

// https://ropsten.rarible.com/token/0x66f806bf40bfa98f2dac85a85d437895043f2be5:TOKENID?tab=owners
function get721LazyNFTUrl(tokenId, network = DEFAULT_SELECTED_NETWORK) {
    return `https://${network.env}.rarible.com/token/${network.ERC721_contract}:${tokenId}?tab=owners`
}

export { get721LazyNFTUrl }