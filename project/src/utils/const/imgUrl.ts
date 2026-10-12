const apiUrl = process.env.REACT_APP_API_URL ?? "http://localhost:8000/api"

export const imgUrl = process.env.REACT_APP_ASSET_URL ?? apiUrl.replace(/\/api\/?$/, "/")
