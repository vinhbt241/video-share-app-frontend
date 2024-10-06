import { useQuery } from "@tanstack/react-query"
import { getVideos } from "../requests/video_requests"

export function useGetVideosQueries() {
  return useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  })
}
