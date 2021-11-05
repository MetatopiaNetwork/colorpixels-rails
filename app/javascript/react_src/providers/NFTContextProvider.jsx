import React, {createContext, useContext, useState} from "react"
import {ClipContext} from "./ClipContextProvider";
import {EthContext} from "./EthContextProvider";
import {SDKLazyMint721} from "../rarible/SDKRarible";
import {DEFAULT_SELECTED_NETWORK} from "../rarible/networks";
import {saveNFTinBackend} from "../utils/APIHelper";
import { NFTStorage } from 'nft.storage'

const apiKey = process.env.NFT_STOAGE_API_KEY
const client = new NFTStorage({ token: apiKey })

const NFTContext = createContext(null);

function NFTContextProvider(props) {
    const [tokenId, setTokenId] = useState(null)
    const { ethAccount } = useContext(EthContext)
    const {clipInfo} = useContext(ClipContext)

    async function clipToNFT() {
        try {
            const clipUrl = clipInfo?.service_url

            const blob = new Blob([clipUrl],  {"type" : "video/mp4"})
            const cid = await client.storeBlob(blob)
            const ipfsUrl = 'ipfs://' + cid
             
            if (ipfsUrl != null) {
                const tokenId = await SDKLazyMint721(ethAccount, ipfsUrl)
                await saveNFTinBackend(clipInfo.id, ethAccount, tokenId, DEFAULT_SELECTED_NETWORK.ERC721_contract, DEFAULT_SELECTED_NETWORK.env)
                setTokenId(tokenId)
            }
        } catch (e) {
            console.log(e)
        }
    }

    async function resetNFTToken() {
        setTokenId(null)
    }


    return (
        <>
            <NFTContext.Provider
                value={{
                    tokenId,
                    clipToNFT,
                    resetNFTToken,
                }}
            >
                {props.children}
            </NFTContext.Provider>
        </>
    )
}

export {NFTContextProvider, NFTContext}