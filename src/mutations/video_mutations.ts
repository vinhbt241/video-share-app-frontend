import { useMutation, useQueryClient } from "@tanstack/react-query"
import { IVideoParams } from "../types/video"
import { createVideo } from "../requests/video_requests"

export function useCreateVideoMutation() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (data: IVideoParams) => createVideo(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["videos"] })
    },
  })
}
