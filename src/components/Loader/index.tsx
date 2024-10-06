import { Box, Spinner } from "@chakra-ui/react"
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
      <Box
        width={"100vw"}
        height={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Spinner size={"xl"} />
      </Box>
    )
  }
  return <Box>{children}</Box>
}
