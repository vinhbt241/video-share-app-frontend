import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_SERVER_ENDPOINT}/api/v1`
const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : undefined,
  },
})

export default Api
