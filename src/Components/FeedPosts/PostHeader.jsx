import { Avatar, Box, Flex, textDecoration, Text } from "@chakra-ui/react"
import { color } from "framer-motion"
const PostHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2} p={2}>

            <Flex alignItems={"center"} gap={2}>
                <Avatar src="/img1.png" alt="User Profile Picture" size={'sm'} />
                <Flex fontSize={12} fontWeight={'bold'} gap={2} >
                    Shrek
                    <Box color={"gray.500"}>
                        &#8226; 1w
                    </Box>
                </Flex>
            </Flex>

            <Box cursor={'pointer'}>
                <Text fontSize={12} color={"blue.500"} fontWeight={"bold"} _hover={{color:"white"}} transition={"0.2s ease-in-out"}>
                    Unfollow
                </Text>
                </Box>


        </Flex>
    )
}

export default PostHeader
