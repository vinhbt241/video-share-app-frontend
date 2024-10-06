import {
  AspectRatio,
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { JSX } from "react"
import Loader from "../../../components/Loader"
import { useGetVideosQueries } from "../../../queries/video_queries"
import { IVideo } from "../../../types/video"

function Home(): JSX.Element {
  const getVideosQuery = useGetVideosQueries()
  const videos: [IVideo] = getVideosQuery.data || []

  const VideoList = videos.map((video) => (
    <Card
      key={video.id}
      direction={{ base: "column", sm: "row" }}
      width={"70%"}
    >
      <CardBody>
        <HStack>
          <Box width={"40%"}>
            <AspectRatio ratio={4 / 3}>
              <iframe
                src={`https://www.youtube.com/embed/${video.embedded_id}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </AspectRatio>
          </Box>
          <Stack ml={8} width={"60%"}>
            <Stack>
              <Heading size={"sm"}>{video.title}</Heading>
              <Text>Shared by {video.created_by}</Text>
              <Text>Likes: {video.likes}</Text>
              <Text>Description:</Text>
            </Stack>
            <Text noOfLines={10}>{video.description}</Text>
          </Stack>
        </HStack>
      </CardBody>
    </Card>
  ))

  return (
    <Loader loading={getVideosQuery.isLoading}>
      <Stack px={20} alignItems={"center"}>
        {VideoList}
      </Stack>
    </Loader>
  )
}

export const Route = createFileRoute("/_auth/home/")({
  component: Home,
})
