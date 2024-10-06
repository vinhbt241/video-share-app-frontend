import { Box } from "@chakra-ui/react"
import { JSX } from "react"

interface ILoaderProps {
  loading: boolean
  children: JSX.Element
}

export default function Loader({
  loading,
  children,
}: ILoaderProps): JSX.Element {
  if (loading) {
    return (
      <Box width={"100vw"} height={"100vh"}>
        Loading...
      </Box>
    )
  }
  return <Box>{children}</Box>
}
