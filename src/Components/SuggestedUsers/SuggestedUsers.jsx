import { VStack, Flex, Text, Box } from "@chakra-ui/react"
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from "./SuggestedUser"
import { Link } from "react-router-dom"

const SuggestedUsers = () => {
  return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            <Flex alignItems = {'center'} justifyContent ={'space-between'} w={'full'}>
              <Text fontsize={12} fontWeight={"bold"} color={'gray.500'}>
                Suggested for you
              </Text>
              <Text fontsize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                See All
              </Text>
            </Flex>
            <SuggestedUser name="Walter White" followers={9587} avatar='https://bit.ly/dan-abramov'/>
            <SuggestedUser name="Tommy Shelby" followers={7547} avatar='https://bit.ly/ryan-florence'/>
            <SuggestedUser name="Tony Stark" followers={7469} avatar='https://bit.ly/code-beast'/>

            <Box fontsize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
              &copy; 2024 Built by {""}
              <Link href="https://www.youtube.com/@asaprogrammer_" target="_blank" color="blue.500" fontsize={14}>
                Ashish Gupta
              </Link>
            </Box>
        </VStack>      
  )
}

export default SuggestedUsers
