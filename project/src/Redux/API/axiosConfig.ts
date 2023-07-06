import axios from "axios";

export const instance = axios.create({
    baseURL: "https://createx-db-f2fc5b834a98.herokuapp.com/api",
})
