import { Avatar, Button, VStack, Flex, Box } from "@chakra-ui/react"
import { color } from "framer-motion"
import { useState } from "react"

const SuggestedUser = ({name, followers, avatar}) => {
  const [isFollowed, setIsFollowed] = useState(false)
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={'full'}>
      <Flex alignItems={'center'} gap={2}>
        <Avatar src={avatar} name={name} size={'md'} />
        <VStack spacing={2} alignItems={'flex-start'}>
         <Box fontSize={12} fontWeight={'bold'}>
          {name}
         </Box>
         <Box fontSize={12} color={'gray.500'}>
          {followers} followers
         </Box>
        </VStack>
      </Flex>
      <Button 
          fontSize={13}
          bg={'transparent'}
          p={0}
          h={'max-content'}
          fontWeight={'medium'}
          color={'blue.400'}
          cursor={'pointer'}
          _hover={{color: "white"}}
          onClick={() => setIsFollowed(!isFollowed)}
      >
         {isFollowed ? "unfollow" : "Follow"}
      </Button>
    </Flex>
  )
}

export default SuggestedUser
 