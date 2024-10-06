import { Button, FormControl, Input, Box } from "@chakra-ui/react"
import { useForm } from "@tanstack/react-form"
import { JSX } from "react"
import { useLoginMutation } from "../../mutations/session_mutations"

export default function LoginForm(): JSX.Element {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        loginForm.handleSubmit()
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={8}>
        <loginForm.Field
          name="email"
          children={(field) => (
            <FormControl>
              <Input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Email"
              />
            </FormControl>
          )}
        />
        <loginForm.Field
          name="password"
          children={(field) => (
            <FormControl>
              <Input
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Password"
              />
            </FormControl>
          )}
        />
        <Button colorScheme="teal" type="submit" minW={"fit-content"}>
          Login/Register
        </Button>
      </Box>
    </form>
  )
}
