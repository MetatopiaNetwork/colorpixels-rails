import axios from "axios"

const instance = axios.create({
    baseURL: "/api/"
})

async function saveNFTinBackend(clipId, ethAccount, tokenId, contractId, networkEnv) {
    await instance.patch("clip/" + clipId, {
        token_id: tokenId,
        contract_id: contractId,
        network_env: networkEnv,
        minter_eth_addr: ethAccount,
    })
}

// export your axios instance to use within your app
export default instance