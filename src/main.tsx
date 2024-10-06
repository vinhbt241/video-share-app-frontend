import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { App } from "./App"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ChakraProvider } from "@chakra-ui/react"

const container = document.getElementById("root")

if (!container) {
  throw "Cannot find the root element"
}

const queryClient = new QueryClient()
const root = createRoot(container)

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </StrictMode>
)
