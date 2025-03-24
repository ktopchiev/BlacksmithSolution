import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:5146/api";

const responseBody = (response: AxiosResponse) => (response.data);

const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string) => axios.post(url).then(responseBody),
}

const Items = {
    getAllItems: () => requests.get('/items'),
    getItemById: (itemId: string) => requests.get(`/items/${itemId}`)
}

export const api = {
    Items
}