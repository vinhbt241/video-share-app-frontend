import { Box, Button, Text } from "@chakra-ui/react"
import { JSX } from "react"
import { ICurrentUser } from "../../types/user"
import LoginForm from "../LoginForm"
import { Link } from "@tanstack/react-router"
import { useLogoutMutation } from "../../mutations/session_mutations"

interface INavbarProps {
  currentUser: ICurrentUser | null
}

export default function Navbar({ currentUser }: INavbarProps): JSX.Element {
  const logoutMutation = useLogoutMutation()

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      border={"1px solid black"}
      padding={4}
    >
      <Text fontSize={"2xl"} fontWeight={"bold"}>
        Funny Movies
      </Text>
      <Box>
        {currentUser && (
          <Box display={"flex"} alignItems={"center"} gap={8}>
            <span>Welcome {currentUser.email}</span>
            <Link to={"/home"}>
              <Button>Share a movie</Button>
            </Link>
            <Button onClick={() => logoutMutation.mutate()}>Logout</Button>
          </Box>
        )}
        {!currentUser && <LoginForm />}
      </Box>
    </Box>
  )
}
