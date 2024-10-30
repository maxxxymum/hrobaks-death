import { Heading, Text, Flex, Separator, Box } from "@radix-ui/themes";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <Flex direction={'column'} align={'stretch'}>
      <Flex direction='column' align={'center'}>
        <Text>welcome to</Text>
        <Heading color="red">HROBAKS DEATH</Heading>
      </Flex>
      <Box py={'2'}>
        <Separator size={'4'} />
      </Box>

      <Flex direction={'column'} flexGrow={'1'} justify={'center'} align={'center'}>
        <Outlet />
      </Flex>
    </Flex>
  )
}