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

const DEFAULT_SELECTED_NETWORK = RINKEBY_INFO

export {MAINNET_INFO, RINKEBY_INFO, ROPSTEN_INFO, DEFAULT_SELECTED_NETWORK}