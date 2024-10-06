import axios from "axios"

const BASE_URL = "http://localhost:3000/api/v1"
const Api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: localStorage.getItem("token")
      ? `Bearer ${localStorage.getItem("token")}`
      : undefined,
  },
})

export default Api
