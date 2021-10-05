import {getWeb3} from "../web3";
import {getHttpClient} from "../httpClient";
import {DEFAULT_SELECTED_NETWORK} from "./networks";

async function customLazyMint721(creatorAddr, uri, nftPrice = "10000", selectedNetwork = DEFAULT_SELECTED_NETWORK) {
    try {
        const baseEndpoint = selectedNetwork.api_endpoint
        const contractAddress = selectedNetwork.ERC721_contract
        const client = getHttpClient(baseEndpoint)
        const path = `/protocol/v0.1/ethereum/nft/collections/${contractAddress}/generate_token_id?minter=${creatorAddr}`
        const res = await client.get(path)

        const tokenID = res.data.tokenId
        const r = res.data.signature.r
        const s = res.data.signature.s
        const v = res.data.signature.v

        const message = get721msg(contractAddress, tokenID, uri, creatorAddr, nftPrice)
        const payload = get721Payload(contractAddress, selectedNetwork.chain_id, message)

        const web3 = getWeb3()
        const signature = await web3SignPayload(web3, creatorAddr, payload)

        const params = {
            ...message,
            "signatures": [signature],
        }
        console.log(JSON.stringify(params))

        const createRes = await client.post("/protocol/v0.1/ethereum/nft/mints", params)
        console.log(createRes.data)
    } catch (e) {
        console.error("ERROR in customLazyMint721")
        console.error(e)
        console.error(e.response)
    }

}

function get721msg(contractAddr, tokenId, uri, creatorAddr, nftPrice) {
    const message = {
        "@type": "ERC721",
        "contract": contractAddr,
        "tokenId": tokenId,
        "tokenURI": uri, // /ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp
        "uri": uri,
        "creators": [
            {
                account: creatorAddr,// "0x1234...",
                value: nftPrice,
            }
        ],
        // "royalties": [{account: "0x1234...", value: 2000}],
        "royalties": [],
    }

    return message
}

async function create721LazyNFTParams(contractAddr, tokenId, uri, creatorAddr, signature, nftPrice) {
    const params = {
        "@type": "ERC721",
        "contract": contractAddr,// "0xB0EA149212Eb707a1E5FC1D2d3fD318a8d94cf05",
        "tokenId": tokenId,
        "uri": uri, // "/ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp",
        "creators": [
            {
                account: creatorAddr, //"0x1234...",
                value: nftPrice, // "10000"
            }
        ],
        // "royalties": [{account: "0x1234...", value: 2000}],
        "royalties": [],

    }

    return params
}

async function web3SignPayload(web3, creatorAddr, payload) {
    const msgData = JSON.stringify(payload);
    const response = await web3.currentProvider.send("eth_signTypedData_v4", [creatorAddr, msgData]);
    const signature = response.result
    return signature
}


function get721Payload(contractAddr, chainID, message) {
    const payload = {
        "types": {
            "EIP712Domain": [
                {
                    type: "string",
                    name: "name",
                },
                {
                    type: "string",
                    name: "version",
                },
                {
                    type: "uint256",
                    name: "chainId",
                },
                {
                    type: "address",
                    name: "verifyingContract",
                }
            ],
            "Mint721": [
                {name: "tokenId", type: "uint256"},
                {name: "tokenURI", type: "string"},
                {name: "creators", type: "Part[]"},
                {name: "royalties", type: "Part[]"}
            ],
            "Part": [
                {name: "account", type: "address"},
                {name: "value", type: "uint96"}
            ]
        },
        "domain": {
            name: "Mint721",
            version: "1",
            chainId: chainID,
            verifyingContract: contractAddr, // "0xB0EA149212Eb707a1E5FC1D2d3fD318a8d94cf05"
        },
        "primaryType": "Mint721",
        "message": message
    }

    return payload
}

export {customLazyMint721}