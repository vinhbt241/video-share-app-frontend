import { Container } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { JSX } from "react"
import Loader from "../../../components/Loader"
import { useGetVideosQueries } from "../../../queries/video_queries"
import { IVideo } from "../../../types/video"

function Home(): JSX.Element {
  const getVideosQuery = useGetVideosQueries()
  const videos: [IVideo] = getVideosQuery.data || []

  return (
    <Loader loading={getVideosQuery.isLoading}>
      <Container>
        {videos.map((video) => (
          <li>{video.resource_url}</li>
        ))}
      </Container>
    </Loader>
  )
}

export const Route = createFileRoute("/_auth/home/")({
  component: Home,
})
