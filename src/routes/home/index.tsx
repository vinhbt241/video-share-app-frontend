import { Box } from "@chakra-ui/react"
import { createFileRoute } from "@tanstack/react-router"
import { JSX } from "react"
import Navbar from "../../components/Navbar"
import { useCurrentUserQuery } from "../../queries/user_queries"
import Loader from "../../components/Loader"

function Home(): JSX.Element {
  const currentUserQuery = useCurrentUserQuery()
  const currentUser = currentUserQuery.data

  return (
    <Loader loading={currentUserQuery.isLoading}>
      <Box>
        <Box position={"fixed"} top={0} left={0} width={"100vw"}>
          <Navbar currentUser={currentUser} />
        </Box>
      </Box>
    </Loader>
  )
}

export const Route = createFileRoute("/home/")({
  component: Home,
})
