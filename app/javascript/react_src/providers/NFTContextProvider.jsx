import React, {createContext, useContext, useState} from "react"
import {getWeb3} from "../web3";
import {ClipContext} from "./ClipContextProvider";
import {EthContext} from "./EthContextProvider";
import {SDKLazyMint721} from "../rarible/SDKRarible";

const NFTContext = createContext(null);

function NFTContextProvider(props) {
    const [tokenId, setTokenId] = useState(null)
    const { ethAccount } = useContext(EthContext)
    const {clipInfo} = useContext(ClipContext)

    async function clipToNFT() {
        try {
            const clipUrl = clipInfo?.service_url
            // const clipUrl = "https://colorpixels-dev1.sfo3.digitaloceanspaces.com/5v67iyc2f67ckho272qkmgvo4rz7"
            // const clipUrl = "/ipfs/QmWLsBu6nS4ovaHbGAXprD1qEssJu4r5taQfB74sCG51tp"
            if (clipUrl != null) {
                const tokenId = await SDKLazyMint721(ethAccount, clipUrl)
                setTokenId(tokenId)
            }
        } catch (e) {
            console.error(e)
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