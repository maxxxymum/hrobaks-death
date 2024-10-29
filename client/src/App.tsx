import { Theme, Heading, Text, Flex, Separator, Box, TextField, Button } from "@radix-ui/themes";

function App() {
  return (
    <Theme appearance="dark" accentColor="tomato">
      <Flex direction={'column'} align={'stretch'}>
        <Flex direction='column' align={'center'}>
          <Text>welcome to</Text>
          <Heading color="red">HROBAKS DEATH</Heading>
        </Flex>
        <Box py={'2'}>
          <Separator size={'4'} />
        </Box>

        <Flex direction={'column'} flexGrow={'1'} justify={'center'} align={'center'}>

          <Heading as="h2" size={'4'}>Login</Heading>
          <Text>Plane name</Text>
          <TextField.Root placeholder="Plane name" />
          <Button>Let's go</Button>
        </Flex>
      </Flex>
    </Theme>
  )
}

export default App
