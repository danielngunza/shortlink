import axios from "axios";


export const key = "2d09e0312ae18537a31f9691dbbe887e58869c58"
const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api