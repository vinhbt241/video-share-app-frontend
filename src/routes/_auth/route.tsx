import {
  createFileRoute,
  Outlet,
  redirect,
  useRouteContext,
} from "@tanstack/react-router"
import { JSX, useEffect } from "react"
import { useCurrentUserQuery } from "../../queries/user_queries"
import Loader from "../../components/Loader"
import Navbar from "../../components/Navbar"
import { Box, useToast } from "@chakra-ui/react"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { useQueryClient } from "@tanstack/react-query"

function AuthRoute(): JSX.Element {
  const currentUserQuery = useCurrentUserQuery()
  const currentUser = currentUserQuery.data
  const context = useRouteContext({ from: "/_auth" })
  const toast = useToast()
  const queryClient = useQueryClient()
  const { sendJsonMessage, readyState } = useWebSocket(
    "ws://localhost:3000/cable",
    {
      onMessage: (event) => {
        const data = JSON.parse(event.data) || {}
        if (data["identifier"]) {
          const channel = JSON.parse(data["identifier"])["channel"]
          if (channel === "VideoChannel" && !!data["message"]) {
            const message = data["message"]
            toast({
              title: `New video: ${message["title"]}`,
              description: `${message["created_by"]} just share a new video!`,
              status: "success",
              duration: 10000,
              isClosable: true,
            })
            queryClient.invalidateQueries({ queryKey: ["videos"] })
          }
        }
      },
    },
    context.isAuthenticated
  )

  useEffect(() => {
    if (readyState === ReadyState.OPEN) {
      sendJsonMessage({
        command: "subscribe",
        identifier: JSON.stringify({
          channel: "VideoChannel",
        }),
      })
    }
  }, [readyState, sendJsonMessage])

  return (
    <Loader loading={currentUserQuery.isLoading}>
      <Box>
        <Box mt={24}>
          <Outlet />
        </Box>
        <Box position={"fixed"} top={0} left={0} width={"100vw"}>
          <Navbar currentUser={currentUser} />
        </Box>
      </Box>
    </Loader>
  )
}

export const Route = createFileRoute("/_auth")({
  component: AuthRoute,
  beforeLoad: ({ location, context }) => {
    if (!context.isAuthenticated && location.pathname != "/home") {
      throw redirect({ to: "/home" })
    }
  },
})
