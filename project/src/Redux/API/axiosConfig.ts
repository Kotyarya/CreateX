import axios from "axios";

export const instance = axios.create({
    baseURL: "https://createxserver-0af809a58e22.herokuapp.com/api",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
})
