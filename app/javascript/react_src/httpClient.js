import axios from "axios";

function getHttpClient(baseEndpoint) {
    const client = axios.create({
        baseURL: `https://${baseEndpoint}`,
    })
    return client
}

export { getHttpClient }