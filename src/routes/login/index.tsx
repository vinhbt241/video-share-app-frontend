import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react"
import { useForm } from "@tanstack/react-form"
import { createFileRoute, redirect } from "@tanstack/react-router"
import { JSX, useEffect } from "react"
import { useLoginMutation } from "../../mutations/session_mutations"

function Login(): JSX.Element {
  const loginMutation = useLoginMutation()

  const loginForm = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async ({ value }) => {
      loginMutation.mutate({
        session: {
          email: value.email,
          password: value.password,
        },
      })
    },
  })

  useEffect(() => {
    if (loginMutation.isSuccess) {
      window.location.reload()
    }
  }, [loginMutation])

  return (
    <Container
      height={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          loginForm.handleSubmit()
        }}
      >
        <loginForm.Field
          name="email"
          children={(field) => (
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </FormControl>
          )}
        />
        <loginForm.Field
          name="password"
          children={(field) => (
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
              />
            </FormControl>
          )}
        />
        <Button mt={4} colorScheme="teal" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  )
}

export const Route = createFileRoute("/login/")({
  component: Login,
  beforeLoad({ context, search }) {
    if (context.currentUser) {
      throw redirect({
        to: (search as Record<string, string>).redirect || "/",
      })
    }
  },
})
