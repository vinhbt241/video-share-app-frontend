import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { JSX } from "react"
import { useCurrentUserQuery } from "../../queries/user_queries"
import Loader from "../../components/Loader"
import Navbar from "../../components/Navbar"
import { Box } from "@chakra-ui/react"

function AuthRoute(): JSX.Element {
  const currentUserQuery = useCurrentUserQuery()
  const currentUser = currentUserQuery.data

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
    console.log(context)
    if (!context.isAuthenticated && location.pathname != "/home") {
      throw redirect({ to: "/home" })
    }
  },
})
