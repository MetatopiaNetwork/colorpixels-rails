import axios from "axios"

const instance = axios.create({
    baseURL: "/api/"
})

// export your axios instance to use within your app
export default instance