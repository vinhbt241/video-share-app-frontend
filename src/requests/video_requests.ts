import Api from "../api"
import { IVideoParams } from "../types/video"

export async function getVideos() {
  const response = await Api.get("videos").catch(() => {
    return {
      data: [],
    }
  })

  return response.data
}

export async function createVideo(data: IVideoParams) {
  const response = await Api.post("videos", data)

  return response.data
}
