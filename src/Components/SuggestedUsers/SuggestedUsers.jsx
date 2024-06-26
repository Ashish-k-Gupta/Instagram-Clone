import { VStack, Flex, Text, Box } from "@chakra-ui/react"
import SuggestedHeader from './SuggestedHeader'
import SuggestedUser from "./SuggestedUser"
import { Link } from "react-router-dom"

const SuggestedUsers = () => {
  return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader />

            <Flex alignItems = {'center'} justifyContent ={'space-between'} w={'full'}>
              <Text fontSize={12} fontWeight={"bold"} color={'gray.500'}>
                Suggested for you
              </Text>
              <Text fontSize={12} fontWeight={"bold"} _hover={{color: "gray.400"}} cursor={"pointer"}>
                See All
              </Text>
            </Flex>
            <SuggestedUser name="Walter White" followers={9587} avatar='https://imgur.com/a/SD2GJsX'/>
            <SuggestedUser name="Tommy Shelby" followers={7547} avatar='https://bit.ly/ryan-florence'/>
            <SuggestedUser name="Homo Sapiens" followers={"7.4 B"} avatar="https://lh3.googleusercontent.com/drive-viewer/AKGpihYnyvOvK3Luy6TFibUfi1dWD09j30hKRL02eb4wJol3Vm8BSc6ta8i_JPg4IMUgDw84Tc8nw1yBwTsZAeU-5ykig1UdMm9UtDE=s2560"/>
            <SuggestedUser name="Tony Stark" followers={7469}   avatar="https://drive.google.com/uc?export=view&id=1AmlBuJA9BOmRQCaIlaLSn6-_Meb5PHBe"/>
            

            <Box fontSize={12} color={'gray.500'} mt={5} alignSelf={'start'}>
              &copy; 2024 Built by {""}
              <Link href="https://www.youtube.com/@asaprogrammer_" target="_blank" color="blue.500" fontSize={14}>
                Ashish Gupta
              </Link>
            </Box>
        </VStack>      
  )
}

export default SuggestedUsers
