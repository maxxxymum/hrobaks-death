import { Heading, Text, Flex, Separator, Box } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Box height={'100vh'}>
      <Flex height={'100%'} direction={'column'} align={'stretch'}>
        <Flex direction='column' align={'center'}>
          <Text>welcome to</Text>
          <Heading color="red">HROBAKS DEATH</Heading>
        </Flex>
        <Box pt={'2'}>
          <Separator size={'4'} />
        </Box>

        <Flex direction={'column'} flexGrow={'1'} justify={'center'} align={'center'}>
          <Outlet />
        </Flex>
      </Flex>
    </Box>

  )
}