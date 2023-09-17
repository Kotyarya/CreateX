import axios from "axios";

export const instance = axios.create({
    baseURL: "https://createx-server-22e82f2cf6ae.herokuapp.com/api",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
})
