export interface IVideoParams {
  video: {
    resource_url: string
  }
}

export interface IVideo {
  id: string
  title: string
  description: string
  embedded_id: string
  likes: number
  created_by: string
}
