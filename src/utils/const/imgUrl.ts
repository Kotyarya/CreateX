const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:8000/api"

export const imgUrl = import.meta.env.VITE_ASSET_URL ?? apiUrl.replace(/\/api\/?$/, "/")
