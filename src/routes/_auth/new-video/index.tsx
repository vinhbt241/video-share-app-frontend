import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useForm } from "@tanstack/react-form"
import { createFileRoute } from "@tanstack/react-router"
import { JSX } from "react"
import { useCreateVideoMutation } from "../../../mutations/video_mutations"

function NewVideo(): JSX.Element {
  const createVideoMutation = useCreateVideoMutation()

  const videoForm = useForm({
    defaultValues: {
      resourceUrl: "",
    },
    onSubmit: async ({ value }) => {
      createVideoMutation.mutate({
        video: {
          resource_url: value.resourceUrl,
        },
      })
    },
  })

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          videoForm.handleSubmit()
        }}
      >
        <Box px={10} py={8} border={"1px solid black"}>
          <videoForm.Field
            name="resourceUrl"
            children={(field) => (
              <FormControl>
                <FormLabel>Share Youtube Video URL</FormLabel>
                <Input
                  type="text"
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </FormControl>
            )}
          />
          <Button mt={4} colorScheme="teal" type="submit" minW={"fit-content"}>
            Share video
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export const Route = createFileRoute("/_auth/new-video/")({
  component: NewVideo,
})
